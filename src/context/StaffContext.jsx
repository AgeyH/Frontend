import { createContext, useContext, useState } from "react";

const StaffContext = createContext();

export const StaffProvider = ({ children }) => {
  const [activeTicketId, setActiveTicketId] = useState(null);

  return (
    <StaffContext.Provider
      value={{
        activeTicketId,
        setActiveTicketId,
      }}
    >
      {children}
    </StaffContext.Provider>
  );
};

export const useStaff = () => useContext(StaffContext);
