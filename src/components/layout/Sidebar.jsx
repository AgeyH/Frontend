import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Overlay (mobile only) */}
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)} />
      )}

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <h2 className="logo">IT Helpdesk</h2>

        <nav>
          <NavLink to="/staff/dashboard">Dashboard</NavLink>
          <NavLink to="/staff/my-tickets">My Tickets</NavLink>
          <NavLink to="/staff/knowledge-base">Knowledge Base</NavLink>
          <NavLink to="/staff/metrics">Metrics</NavLink>
          <NavLink to="/staff/notifications">Notifications</NavLink>
          <NavLink to="/staff/profile">My Profile</NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
