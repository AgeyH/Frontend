import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const AdminLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
