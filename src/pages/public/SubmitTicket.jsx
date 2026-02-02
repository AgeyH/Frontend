import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/submitTicket.css";
import { generateTicketNumber } from "../../utils/ticketNumber";
import { saveTicket } from "../../utils/ticketStorage";

const SubmitTicket = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    staffNumber: "",
    fullName: "",
    phone: "",
    location: "",
    email: "",
    idNumber: "",
    category: "",
    description: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ REQUIRED FIELD VALIDATION FIRST
    if (
      !formData.staffNumber ||
      !formData.fullName ||
      !formData.phone ||
      !formData.location ||
      !formData.description
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // ✅ CREATE TICKET AFTER VALIDATION
    const newTicket = {
      id: generateTicketNumber(),
      requester: {
        staffNumber: formData.staffNumber,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        idNumber: formData.idNumber,
        location: formData.location,
      },
      category: formData.category || "General",
      description: formData.description,
      status: "Open",
      priority: "Normal",
      createdAt: new Date().toISOString(),
      assignedPrimary: null,
      assignedSecondary: null,
      activityLog: [
        {
          action: "Ticket Created",
          by: formData.staffNumber,
          comment: "Ticket logged by end user",
          timestamp: new Date().toISOString(),
        },
      ],
    };

    // 🔍 For now (until backend)
    saveTicket(newTicket);

    // ✅ PASS TICKET NUMBER TO SUCCESS PAGE
    navigate("/ticket-success", {
      state: {
        ticketNumber: newTicket.id,
      },
    });
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
              type="text"
              name="location"
              placeholder="Building, Floor, Room *"
              value={formData.location}
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
            />

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
