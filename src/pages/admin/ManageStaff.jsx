import { useState } from "react";
import "../../styles/admin/manageStaff.css";

const ManageStaff = () => {
  const [users, setUsers] = useState([
    {
      id: "U-001",
      name: "Jane Mwangi",
      email: "jane@company.com",
      phone: "0712345678",
      role: "staff",
      status: "active",
    },
    {
      id: "U-002",
      name: "Brian Otieno",
      email: "brian@company.com",
      phone: "0798123456",
      role: "admin",
      status: "active",
    },
  ]);

  const updateUser = (id, field, value) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, [field]: value } : u)),
    );
  };

  return (
    <div className="admin-page">
      <h1>Manage Users</h1>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <strong>{user.name}</strong>
                  <br />
                  <span className="muted">{user.id}</span>
                </td>

                <td>
                  {user.email}
                  <br />
                  {user.phone}
                </td>

                <td>
                  <select
                    value={user.role}
                    onChange={(e) =>
                      updateUser(user.id, "role", e.target.value)
                    }
                  >
                    <option value="staff">IT Staff</option>
                    <option value="admin">Admin</option>
                    <option value="director">Director</option>
                  </select>
                </td>

                <td>
                  <select
                    value={user.status}
                    onChange={(e) =>
                      updateUser(user.id, "status", e.target.value)
                    }
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStaff;
