import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      {/* Public header can go here later */}
      <Outlet />
    </div>
  );
};

export default PublicLayout;
