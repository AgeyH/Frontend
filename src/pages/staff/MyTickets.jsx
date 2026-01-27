import { Link } from "react-router-dom";
import "../../styles/staff/myTickets.css";
import { shouldEscalate, getRemainingTime } from "../../utils/sla";
import { useEffect, useState } from "react";

const MyTickets = () => {
  const [now, setNow] = useState(Date.now());

  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Email not working",
      category: "Email",
      status: "Open",
      priority: "High",
      createdAt: "2026-01-26T08:00:00",
      slaHours: 4,
      escalated: false,
    },
    {
      id: 2,
      title: "Printer offline",
      category: "Hardware",
      status: "In Progress",
      priority: "Medium",
      createdAt: "2026-01-26T06:00:00",
      slaHours: 8,
      escalated: true,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) => {
        if (
          !ticket.escalated &&
          shouldEscalate(ticket.createdAt, ticket.slaHours, now)
        ) {
          return { ...ticket, escalated: true };
        }
        return ticket;
      }),
    );
  }, [now]);

  return (
    <div className="staff-page">
      <h1>My Tickets</h1>

      <div className="tickets-list">
        {tickets.map((ticket) => {
          const sla = getRemainingTime(ticket.createdAt, ticket.slaHours, now); // SLA calculation
          const isEscalated =
            ticket.escalated ||
            shouldEscalate(ticket.createdAt, ticket.slaHours);

          return (
            <Link
              key={ticket.id}
              to={`/staff/tickets/${ticket.id}`}
              className="ticket-card"
            >
              <h3>
                {ticket.title}
                {isEscalated && (
                  <span className="escalation-badge">Escalated</span>
                )}
              </h3>

              <p>
                <strong>Category:</strong> {ticket.category}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`status ${ticket.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {ticket.status}
                </span>
              </p>

              <p>
                <strong>Priority:</strong> {ticket.priority}
              </p>

              {/* SLA Display */}
              <p className={`sla ${sla.state}`}>
                <strong>SLA:</strong> {sla.label}
              </p>

              {/* Manual Escalation */}
              {!isEscalated && (
                <button
                  className="escalate-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setTickets((prev) =>
                      prev.map((t) =>
                        t.id === ticket.id ? { ...t, escalated: true } : t,
                      ),
                    );
                  }}
                >
                  Escalate Ticket
                </button>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyTickets;
