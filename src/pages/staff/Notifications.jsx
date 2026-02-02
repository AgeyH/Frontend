import "../../styles/staff/notifications.css";

const Notifications = () => {
  const notifications = [
    { id: 1, message: "Ticket #12 nearing SLA breach", type: "warning" },
    {
      id: 2,
      message: "You were added as secondary IT on Ticket #8",
      type: "info",
    },
  ];

  return (
    <div className="staff-page">
      <h1>Notifications</h1>

      {notifications.map((n) => (
        <div key={n.id} className={`notification ${n.type}`}>
          {n.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
