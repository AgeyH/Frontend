import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <aside>
        <p>Admin Sidebar</p>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
