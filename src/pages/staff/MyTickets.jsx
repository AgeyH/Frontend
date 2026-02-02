import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/staff/myTickets.css";
import { shouldEscalate, getRemainingTime } from "../../utils/sla";
import { useStaff } from "../../context/StaffContext";

const MyTickets = () => {
  const navigate = useNavigate();
  const { activeTicketId, setActiveTicketId } = useStaff();
  const [now, setNow] = useState(Date.now());

  const [tickets, setTickets] = useState([
    {
      id: "TCK-1001",
      title: "Email not working",
      category: "Email",
      status: "In Progress",
      priority: "Normal",
      createdAt: "2026-01-26T08:00:00",
      slaHours: 4,
      escalated: false,
      assignedPrimary: "You",
      assignedSecondary: null,
    },
    {
      id: "TCK-1002",
      title: "Printer offline",
      category: "Hardware",
      status: "Open",
      priority: "Normal",
      createdAt: "2026-01-26T06:00:00",
      slaHours: 8,
      escalated: false,
      assignedPrimary: "You",
      assignedSecondary: null,
    },
  ]);

  // Live SLA timer
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto escalation
  useEffect(() => {
    setTickets((prev) =>
      prev.map((ticket) => {
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
          const sla = getRemainingTime(ticket.createdAt, ticket.slaHours, now);
          const isLocked = activeTicketId && activeTicketId !== ticket.id;

          return (
            <div
              key={ticket.id}
              className={`ticket-card ${isLocked ? "locked" : ""}`}
              onClick={() => {
                if (isLocked) {
                  alert(
                    "You already have an active ticket. Pend or resolve it before opening another.",
                  );
                  return;
                }
                setActiveTicketId(ticket.id);
                navigate(`/staff/tickets/${ticket.id}`);
              }}
            >
              <h3>
                {ticket.title}
                {ticket.escalated && (
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

              <p className={`sla ${sla.state}`}>
                <strong>SLA:</strong> {sla.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTickets;
