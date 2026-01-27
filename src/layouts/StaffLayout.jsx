import { Outlet } from "react-router-dom";
import StaffNav from "../components/staff/StaffNav";

const StaffLayout = () => {
  return (
    <div className="staff-layout">
      <StaffNav />
      <main className="staff-page">
        <Outlet />
      </main>
    </div>
  );
};

export default StaffLayout;
