import { useNavigate } from "react-router-dom";
import "../../styles/ticketSuccess.css";

const TicketSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">
        <h1>Ticket Submitted Successfully</h1>
        <p>
          Your IT support request has been received. Our IT team will review the
          issue and get back to you as soon as possible.
        </p>

        <button onClick={() => navigate("/")}>Return to Home</button>
      </div>
    </div>
  );
};

export default TicketSuccess;
