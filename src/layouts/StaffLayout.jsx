import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import { StaffProvider } from "../context/StaffContext";

const StaffLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <StaffProvider>
          <Outlet />
        </StaffProvider>
      </main>
    </div>
  );
};

export default StaffLayout;
