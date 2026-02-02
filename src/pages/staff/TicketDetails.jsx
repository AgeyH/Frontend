import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/staff/ticketDetails.css";
import { useStaff } from "../../context/StaffContext";

const TicketDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setActiveTicketId } = useStaff();

  const [ticket, setTicket] = useState({
    id,
    title: "Email not working",
    status: "In Progress",
    priority: "Normal",
    assignedPrimary: "You",
    assignedSecondary: null,
    activityLog: [
      {
        action: "Ticket Created",
        by: "End User",
        comment: "Issue logged",
        timestamp: new Date().toISOString(),
      },
    ],
  });

  const [pendComment, setPendComment] = useState("");

  const updateStatus = (newStatus, comment) => {
    setTicket((prev) => ({
      ...prev,
      status: newStatus,
      activityLog: [
        ...prev.activityLog,
        {
          action: `Status changed to ${newStatus}`,
          by: "IT Staff",
          comment,
          timestamp: new Date().toISOString(),
        },
      ],
    }));

    if (newStatus === "Pending" || newStatus === "Resolved") {
      setActiveTicketId(null);
      navigate("/staff/my-tickets");
    }
  };

  return (
    <div className="staff-page">
      <h1>Ticket Details</h1>

      <div className="ticket-details-card">
        <h3>{ticket.title}</h3>

        <p>
          <strong>Ticket Number:</strong> {ticket.id}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          <span className={`status ${ticket.status.toLowerCase()}`}>
            {ticket.status}
          </span>
        </p>

        <p>
          <strong>Primary Staff:</strong> {ticket.assignedPrimary}
        </p>

        <p>
          <strong>Secondary Staff:</strong> {ticket.assignedSecondary || "None"}
        </p>

        {/* PEND TICKET */}
        {ticket.status === "In Progress" && (
          <div className="pend-section">
            <textarea
              placeholder="Reason for pending this ticket (required)"
              value={pendComment}
              onChange={(e) => setPendComment(e.target.value)}
            />

            <button
              disabled={!pendComment}
              onClick={() => updateStatus("Pending", pendComment)}
            >
              Pend Ticket
            </button>
          </div>
        )}

        {/* RESOLVE */}
        {ticket.status !== "Resolved" && (
          <button
            className="resolve-btn"
            onClick={() => updateStatus("Resolved", "Issue resolved")}
          >
            Mark as Resolved
          </button>
        )}
      </div>

      {/* ACTIVITY LOG */}
      <div className="activity-log">
        <h3>Activity Log</h3>

        {ticket.activityLog.map((log, index) => (
          <div key={index} className="log-item">
            <p>
              <strong>{log.action}</strong> by {log.by}
            </p>
            <p>{log.comment}</p>
            <small>{new Date(log.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketDetails;
