const STORAGE_KEY = "it_helpdesk_tickets";

export const saveTicket = (ticket) => {
  const tickets = getAllTickets();
  tickets.push(ticket);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
};

export const getAllTickets = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const getTicketByNumber = (ticketNumber) => {
  return getAllTickets().find((t) => t.id === ticketNumber);
};

export const getTicketsByRequester = (identifier) => {
  return getAllTickets().filter(
    (t) =>
      t.requester.staffNumber === identifier ||
      t.requester.idNumber === identifier,
  );
};
