import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/submitTicket.css";

const SubmitTicket = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    staffNumber: "",
    fullName: "",
    phone: "",
    email: "",
    idNumber: "",
    category: "",
    description: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required field validation
    if (
      !formData.staffNumber ||
      !formData.fullName ||
      !formData.phone ||
      !formData.description
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Later: send data to backend
    console.log("Ticket Submitted:", formData);

    navigate("/ticket-success");
  };

  return (
    <div className="submit-ticket-page">
      <div className="ticket-card">
        <h1>Submit IT Support Ticket</h1>
        <p className="subtitle">
          Fill in the form below to report an IT-related issue.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Personal Information</h3>

            <input
              type="text"
              name="staffNumber"
              placeholder="Staff Number *"
              value={formData.staffNumber}
              onChange={handleChange}
            />

            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email (Optional)"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="idNumber"
              placeholder="ID Number (Optional)"
              value={formData.idNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-section">
            <h3>Issue Details</h3>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category (Optional)</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="Network">Network</option>
              <option value="Email">Email</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="description"
              placeholder="Describe the problem *"
              rows="5"
              value={formData.description}
              onChange={handleChange}
            ></textarea>

            <input type="file" name="attachment" onChange={handleChange} />
          </div>

          <button type="submit" className="submit-btn">
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitTicket;
