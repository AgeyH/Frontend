import { useState } from "react";
import {
  getTicketByNumber,
  getTicketsByRequester,
} from "../../utils/ticketStorage";
import "../../styles/trackTicket.css";
import StatusChip from "../../components/common/StatusChip";
import ActivityTimeline from "../../components/common/ActivityTimeline";

const TrackTicket = () => {
  const [ticketNumber, setTicketNumber] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const handleTrackByNumber = () => {
    const ticket = getTicketByNumber(ticketNumber.trim());
    if (!ticket) {
      setError("No ticket found with that ticket number.");
      setResults(null);
      return;
    }
    setResults([ticket]);
    setError("");
  };

  const handleTrackByUser = () => {
    const tickets = getTicketsByRequester(identifier.trim());
    if (tickets.length === 0) {
      setError("No tickets found for this identifier.");
      setResults(null);
      return;
    }
    setResults(tickets);
    setError("");
  };

  return (
    <div className="track-ticket-page">
      <h1>Track Your Ticket</h1>

      <div className="track-card">
        <h3>Track by Ticket Number</h3>
        <input
          type="text"
          placeholder="Enter Ticket Number"
          value={ticketNumber}
          onChange={(e) => setTicketNumber(e.target.value)}
        />
        <button onClick={handleTrackByNumber}>Track Ticket</button>
      </div>

      <div className="track-card">
        <h3>View All Your Tickets</h3>
        <input
          type="text"
          placeholder="Enter Staff Number or ID Number"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <button onClick={handleTrackByUser}>View Tickets</button>
      </div>

      {error && <p className="error-text">{error}</p>}

      {results && (
        <div className="results">
          {results.map((ticket) => (
            <div className="ticket-result" key={ticket.id}>
              <h3>Ticket #{ticket.id}</h3>

              <div className="ticket-meta">
                <StatusChip
                  label={ticket.status}
                  type={ticket.status.toLowerCase().replace(" ", "-")}
                />
                {ticket.priority === "High" && (
                  <StatusChip label="High Priority" type="high" />
                )}
              </div>

              <p>
                <strong>Location:</strong> {ticket.requester.location}
              </p>
              <p>
                <strong>Assigned Primary:</strong>{" "}
                {ticket.assignedPrimary || "Not Assigned"}
              </p>
              <p>
                <strong>Assigned Secondary:</strong>{" "}
                {ticket.assignedSecondary || "None"}
              </p>

              <ActivityTimeline logs={ticket.activityLog} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackTicket;
