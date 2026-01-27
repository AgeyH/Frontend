import { useState } from "react";
import "../../styles/admin.css";

const ManageStaff = () => {
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      department: "ICT",
      status: "pending",
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      email: "mary@example.com",
      department: "ICT",
      status: "active",
    },
  ]);

  const updateStatus = (id, status) => {
    setStaff(staff.map((s) => (s.id === id ? { ...s, status } : s)));
  };

  return (
    <div className="admin-page">
      <h2>Manage IT Staff</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {staff.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td className={`status ${user.status}`}>{user.status}</td>
              <td>
                {user.status === "pending" && (
                  <>
                    <button
                      className="approve-btn"
                      onClick={() => updateStatus(user.id, "active")}
                    >
                      Approve
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() => updateStatus(user.id, "rejected")}
                    >
                      Reject
                    </button>
                  </>
                )}
                {user.status !== "pending" && "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStaff;
