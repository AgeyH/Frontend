export const getSlaStatus = (createdAt, slaHours) => {
  const created = new Date(createdAt).getTime();
  const deadline = created + slaHours * 60 * 60 * 1000;
  const now = Date.now();

  const remainingMs = deadline - now;
  const remainingHours = remainingMs / (1000 * 60 * 60);

  if (remainingMs <= 0) {
    return { label: "Breached", state: "breached", remaining: 0 };
  }

  if (remainingHours <= 1) {
    return {
      label: `${Math.ceil(remainingHours * 60)} min left`,
      state: "warning",
      remaining: remainingHours,
    };
  }

  return {
    label: `${remainingHours.toFixed(1)} hrs left`,
    state: "on-track",
    remaining: remainingHours,
  };
};

export const shouldEscalate = (createdAt, slaHours) => {
  const created = new Date(createdAt).getTime();
  const deadline = created + slaHours * 60 * 60 * 1000;
  return Date.now() > deadline;
};

export function getRemainingTime(createdAt, slaHours) {
  const created = new Date(createdAt);
  const deadline = new Date(created.getTime() + slaHours * 60 * 60 * 1000);
  const now = new Date();

  const diffMs = deadline - now;

  if (diffMs <= 0) {
    return {
      label: "SLA Breached",
      state: "breached",
      remainingMs: 0,
    };
  }

  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return {
    label: `${hours}h ${minutes}m remaining`,
    state: totalMinutes <= 60 ? "warning" : "ok",
    remainingMs: diffMs,
  };
}
