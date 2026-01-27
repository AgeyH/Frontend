import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import logo from "../../assets/images/SDHUD logo.png";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Placeholder logic (API later)
    console.log({
      ...form,
      role: "staff",
      status: "pending",
    });

    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleRegister}>
        <img src={logo} alt="Logo" className="auth-logo" />

        <h2>IT Staff Registration</h2>
        <p className="auth-subtitle">Account requires admin approval</p>

        <label>Full Name</label>
        <input
          name="name"
          placeholder="Enter full name"
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          required
        />

        <label>Department</label>
        <input
          name="department"
          placeholder="e.g. ICT, Support"
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <p className="auth-warning">
          ⚠ Your account will be reviewed before activation
        </p>

        <button
          type="button"
          className="link-btn"
          onClick={() => navigate("/login")}
        >
          ← Back to Login
        </button>
      </form>
    </div>
  );
};

export default Register;
