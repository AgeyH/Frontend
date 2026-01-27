import { useParams } from "react-router-dom";
import { useState } from "react";
import "../../styles/staff/ticketDetails.css";
import { getRemainingTime, shouldEscalate } from "../../utils/sla";

const TicketDetails = () => {
  const { id } = useParams();

  // Mock ticket
  const ticket = {
    id,
    title: "Email not working",
    category: "Email",
    priority: "High",
    status: "Open",
    createdAt: "2026-01-26T08:00:00",
    slaHours: 4,
  };

  const [status, setStatus] = useState(ticket.status);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const sla = getRemainingTime(ticket.createdAt, ticket.slaHours);
  const escalated = shouldEscalate(ticket.createdAt, ticket.slaHours);

  const addComment = () => {
    if (!commentText.trim()) return;
    setComments([
      ...comments,
      { text: commentText, time: new Date().toLocaleString() },
    ]);
    setCommentText("");
  };

  return (
    <div className="ticket-details">
      <h2>Ticket #{ticket.id}</h2>

      <div className="ticket-info">
        <p>
          <strong>Title:</strong> {ticket.title}
        </p>
        <p>
          <strong>Category:</strong> {ticket.category}
        </p>
        <p>
          <strong>Priority:</strong> {ticket.priority}
        </p>

        <p>
          <strong>Status:</strong>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </p>

        <p className={`sla ${sla.state}`}>
          <strong>SLA:</strong> {sla.label}
        </p>

        {escalated && <span className="escalation-badge">Escalated</span>}
      </div>

      <div className="comments-section">
        <h3>Internal Notes</h3>

        {comments.map((c, i) => (
          <div key={i} className="comment">
            <p>{c.text}</p>
            <span>{c.time}</span>
          </div>
        ))}

        <textarea
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />

        <button onClick={addComment}>Add Comment</button>
      </div>

      {!escalated && (
        <button
          className="escalate-btn"
          onClick={() => alert("Ticket escalated (mock)")}
        >
          Escalate Ticket
        </button>
      )}
    </div>
  );
};

export default TicketDetails;
