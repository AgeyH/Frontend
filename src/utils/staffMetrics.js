export const calculateStaffMetrics = (tickets) => {
  return {
    handled: tickets.length,
    resolved: tickets.filter((t) => t.status === "Resolved").length,
    escalated: tickets.filter((t) => t.escalated).length,
    breached: tickets.filter((t) => t.slaBreached).length,
  };
};
