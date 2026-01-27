import "../../styles/staff/metrics.css";

const Metrics = () => {
  const metrics = [
    {
      title: "Tickets Handled Today",
      value: 14,
      description: "Total tickets worked on today",
    },
    {
      title: "Average Resolution Time",
      value: "2h 35m",
      description: "Across all tickets",
    },
    {
      title: "SLA Compliance",
      value: "92%",
      description: "Tickets resolved within SLA",
    },
    {
      title: "Escalation Rate",
      value: "8%",
      description: "Tickets escalated",
    },
  ];

  return (
    <div className="staff-metrics">
      <h2>Staff Performance Metrics</h2>
      <p className="metrics-subtitle">
        Overview of your ticket handling efficiency
      </p>

      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div className="metric-card" key={metric.title}>
            <h3>{metric.value}</h3>
            <p className="metric-title">{metric.title}</p>
            <span className="metric-desc">{metric.description}</span>
          </div>
        ))}
      </div>

      {/* SLA Breakdown */}
      <div className="sla-breakdown">
        <h3>SLA Health</h3>
        <div className="sla-bars">
          <div className="sla good">Within SLA (92%)</div>
          <div className="sla warning">Near Breach (6%)</div>
          <div className="sla danger">Breached (2%)</div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
