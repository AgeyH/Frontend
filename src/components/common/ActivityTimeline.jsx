import "./activityTimeline.css";

const ActivityTimeline = ({ logs }) => {
  return (
    <div className="timeline">
      <h3>Activity Log</h3>

      {logs.length === 0 && <p>No activity yet.</p>}

      {logs.map((log, index) => (
        <div className="timeline-item" key={index}>
          <div className="dot" />
          <div className="content">
            <p className="action">{log.action}</p>
            <p className="meta">
              By <strong>{log.by}</strong> •{" "}
              {new Date(log.timestamp).toLocaleString()}
            </p>
            {log.comment && <p className="comment">{log.comment}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityTimeline;
