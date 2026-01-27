import { NavLink } from "react-router-dom";
import "./StaffNav.css";

const unreadCount = 2; //mock for now

const StaffNav = () => {
  return (
    <aside className="staff-nav">
      <div className="staff-nav-header">
        <h2>IT Staff</h2>
      </div>

      <nav className="staff-nav-links">
        <NavLink to="/staff/dashboard">Dashboard</NavLink>
        <NavLink to="/staff/my-tickets">My Tickets</NavLink>
        <NavLink to="/staff/knowledge-base">Knowledge Base</NavLink>
        <NavLink to="/staff/notifications" className="notif-link">
          Notifications
          {unreadCount > 0 && (
            <span className="notif-badge">{unreadCount}</span>
          )}
        </NavLink>{" "}
        <NavLink to="/staff/reports">Reports</NavLink>
        <NavLink to="/staff/metrics">Metrics</NavLink>
      </nav>
    </aside>
  );
};

export default StaffNav;
