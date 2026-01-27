import { useParams } from "react-router-dom";
import { useState } from "react";
import "../../styles/staff/TicketDetails.css";

const TicketDetails = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("Open");
  const [notes, setNotes] = useState("");

  return (
    <div className="staff-page">
      <h1>Ticket #{id}</h1>

      <section className="ticket-section">
        <p>
          <strong>Issue:</strong> Email not working
        </p>
        <p>
          <strong>Category:</strong> Email
        </p>
        <p>
          <strong>Priority:</strong> High
        </p>

        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
          <option>Escalated</option>
        </select>
      </section>

      <section className="ticket-section">
        <label>Internal Notes</label>
        <textarea
          placeholder="Add internal notes..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </section>

      <button className="primary-btn">Save Changes</button>
    </div>
  );
};

export default TicketDetails;
