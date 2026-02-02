import { Link } from "react-router-dom";
import "../../styles/staff/dashboard.css";

const StaffDashboard = () => {
  const stats = [
    { label: "Open Tickets", count: 5, type: "open" },
    { label: "Pending", count: 3, type: "pending" },
    { label: "Resolved", count: 12, type: "resolved" },
    { label: "Escalated", count: 1, type: "escalated" },
    { label: "Overdue", count: 2, type: "overdue" },
  ];

  return (
    <div className="staff-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h2>IT Staff Dashboard</h2>
        <p>Overview of ticket activity and SLA health</p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((item) => (
          <div className={`stat-card ${item.type}`} key={item.label}>
            <div className="stat-count">{item.count}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Focus Section */}
      <div className="dashboard-focus">
        <h3>Today’s Focus</h3>

        <ul>
          <li>
            🔥 <strong>2 tickets</strong> are overdue and need attention
          </li>
          <li>
            ⚠️ <strong>1 ticket</strong> is escalated
          </li>
          <li>⏱ Monitor SLA timers on high priority tickets</li>
        </ul>

        <div className="dashboard-actions">
          <Link to="/staff/my-tickets" className="action-btn primary">
            View My Tickets
          </Link>
          <Link to="/staff/escalations" className="action-btn secondary">
            View Escalations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
