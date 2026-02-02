import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/ticketSuccess.css";

const TicketSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get ticket number from navigation state
  const ticketNumber = location.state?.ticketNumber;

  return (
    <div className="success-page">
      <div className="success-card">
        <h1>Ticket Submitted Successfully</h1>

        <p>
          Your IT support request has been received. Our IT team will review the
          issue and get back to you as soon as possible.
        </p>

        {ticketNumber ? (
          <p>
            <strong>Ticket Number: {ticketNumber}</strong>
          </p>
        ) : (
          <p className="warning-text">
            Ticket number unavailable. Please contact IT support.
          </p>
        )}

        <button onClick={() => navigate("/")}>Return to Home</button>
      </div>
    </div>
  );
};

export default TicketSuccess;
