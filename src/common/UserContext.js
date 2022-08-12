import { createContext, useState } from "react";
import React from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [membership, setMembership] = useState(null);
  return (
    <UserContext.Provider value={{ membership, setMembership }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
