export const generateTicketNumber = () => {
  const year = new Date().getFullYear();
  const rand = Math.floor(100000 + Math.random() * 900000);
  return `TCK-${year}-${rand}`;
};
