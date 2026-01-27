import "../../styles/staff/notifications.css";

const notifications = [
  {
    id: 1,
    type: "warning",
    message: "Ticket #102 is nearing SLA breach.",
    time: "5 mins ago",
  },
  {
    id: 2,
    type: "danger",
    message: "Ticket #98 has been escalated.",
    time: "30 mins ago",
  },
  {
    id: 3,
    type: "info",
    message: "New ticket assigned to you.",
    time: "1 hour ago",
  },
];

const Notifications = () => {
  return (
    <div className="notifications-page">
      <h2>Notifications</h2>

      <div className="notifications-list">
        {notifications.map((note) => (
          <div key={note.id} className={`notification ${note.type}`}>
            <p className="notification-message">{note.message}</p>
            <span className="notification-time">{note.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
