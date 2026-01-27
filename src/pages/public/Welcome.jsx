import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/SDHUD logo.png";
import "../../styles/welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <img src={logo} alt="Ministry Logo" className="welcome-logo" />
        <h1>IT Helpdesk & Ticketing System</h1>
        <p>State Department for Housing and Urban Development</p>
      </header>

      <main className="welcome-actions">
        <button
          className="btn primary"
          onClick={() => navigate("/submit-ticket")}
        >
          Submit IT Support Ticket
        </button>

        <button className="btn secondary" onClick={() => navigate("/login")}>
          IT Staff / Admin Login
        </button>
      </main>

      <footer className="welcome-footer">
        © {new Date().getFullYear()} Ministry of Lands, Public Works, Housing
        and Urban Development
      </footer>
    </div>
  );
};

export default Welcome;
