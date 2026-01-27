import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import logo from "../../assets/images/SDHUD logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("staff");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // UI-only routing (auth comes later)
    if (role === "staff") navigate("/staff/dashboard");
    if (role === "admin") navigate("/admin/dashboard");
    if (role === "director") navigate("/director/dashboard");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleLogin}>
        <img src={logo} alt="Logo" className="auth-logo" />

        <h2>System Login</h2>
        <p className="auth-subtitle">Secure IT Access Portal</p>

        <label>Login As</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="staff">IT Staff</option>
          <option value="admin">Admin</option>
          <option value="director">Director</option>
        </select>

        <label>Email / Username</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <button
          type="button"
          className="link-btn"
          onClick={() => navigate("/register")}
        >
          New IT Staff? Register Here
        </button>

        <button
          type="button"
          className="link-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Welcome
        </button>
      </form>
    </div>
  );
};

export default Login;
