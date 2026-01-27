import { Outlet } from "react-router-dom";

const DirectorLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <aside>
        <p>Director Sidebar</p>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DirectorLayout;
