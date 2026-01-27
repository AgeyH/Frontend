const DashboardCard = ({ title, value, active }) => {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "10px",
        minWidth: "160px",
        cursor: "pointer",
        backgroundColor: active
          ? "var(--color-accent)"
          : "var(--color-primary)",
        color: "var(--color-white)",
        transition: "background-color 0.2s ease",
      }}
    >
      <h3>{title}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
};

export default DashboardCard;
