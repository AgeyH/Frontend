import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>IT Helpdesk</h2>

      <nav>
        <p className="sidebar-section">MAIN</p>
        <NavLink to="/staff/dashboard">Dashboard</NavLink>
        <NavLink to="/staff/tickets">My Tickets</NavLink>

        <p className="sidebar-section">RESOURCES</p>
        <NavLink to="/staff/knowledge">Knowledge Base</NavLink>
        <NavLink to="/staff/notifications">Notifications</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
