import "./statusChip.css";

const StatusChip = ({ label, type }) => {
  return <span className={`chip ${type}`}>{label}</span>;
};

export default StatusChip;
