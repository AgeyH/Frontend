import { Routes, Route } from "react-router-dom";

/* Layouts */
import PublicLayout from "../layouts/PublicLayout";
import StaffLayout from "../layouts/StaffLayout";
import AdminLayout from "../layouts/AdminLayout";
import DirectorLayout from "../layouts/DirectorLayout";

/* Public pages */
import Welcome from "../pages/public/Welcome";
import SubmitTicket from "../pages/public/SubmitTicket";
import TicketSuccess from "../pages/public/TicketSuccess";
import TrackTicket from "../pages/public/TrackTicket";

/* Auth pages */
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

/* Staff pages */
import StaffDashboard from "../pages/staff/Dashboard";
import MyTickets from "../pages/staff/MyTickets";
import KnowledgeBase from "../pages/staff/KnowledgeBase";
import TicketDetails from "../pages/staff/TicketDetails";
import Tickets from "../pages/staff/Tickets";
import Notifications from "../pages/staff/Notifications";
import Metrics from "../pages/staff/Metrics";
import Profile from "../pages/staff/Profile";

/* Admin pages */
import AdminDashboard from "../pages/admin/Dashboard";
import ManageStaff from "../pages/admin/ManageStaff";

/* Director pages */
import DirectorDashboard from "../pages/director/Dashboard";

/* Error */
import NotFound from "../pages/errors/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/submit-ticket" element={<SubmitTicket />} />
        <Route path="/ticket-success" element={<TicketSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/track-ticket" element={<TrackTicket />} />
      </Route>

      {/* STAFF */}
      <Route path="/staff" element={<StaffLayout />}>
        <Route path="dashboard" element={<StaffDashboard />} />
        <Route path="my-tickets" element={<MyTickets />} />
        <Route path="knowledge-base" element={<KnowledgeBase />} />
        <Route path="tickets/:id" element={<TicketDetails />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="metrics" element={<Metrics />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="manage-staff" element={<ManageStaff />} />
      </Route>

      {/* DIRECTOR */}
      <Route path="/director" element={<DirectorLayout />}>
        <Route path="dashboard" element={<DirectorDashboard />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
