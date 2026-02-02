import { useNavigate } from "react-router-dom";
import "../../styles/staff/profile.css";

const Profile = () => {
  const navigate = useNavigate();

  // TEMP MOCK (later comes from AuthContext)
  const staff = {
    fullName: "John Mwangi",
    staffNumber: "IT-102",
    email: "john@company.com",
    phone: "+254712345678",
    role: "IT Staff",
  };

  const handleLogout = () => {
    // Later: clear auth tokens / context
    navigate("/login");
  };

  return (
    <div className="staff-page">
      <h1>My Profile</h1>

      <div className="profile-card">
        <p>
          <strong>Name:</strong> {staff.fullName}
        </p>
        <p>
          <strong>Staff Number:</strong> {staff.staffNumber}
        </p>
        <p>
          <strong>Email:</strong> {staff.email}
        </p>
        <p>
          <strong>Phone:</strong> {staff.phone}
        </p>
        <p>
          <strong>Role:</strong> {staff.role}
        </p>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
