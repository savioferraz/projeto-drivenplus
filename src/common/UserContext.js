import { createContext, useState } from "react";
import React from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [membership, setMembership] = useState(null);
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();

  return (
    <UserContext.Provider
      value={{ userId, setUserId, membership, setMembership, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
