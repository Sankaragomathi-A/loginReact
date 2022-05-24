import { useState, createContext } from "react";

export const UserContext = createContext({ name: "", auth: false });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([
    {
      name: "nithya",
      password: 123,
      role: "SuperAdmin",
      status: "Active",
      data: "1545",
      auth: true,
    },
  ]);

  const login = (name) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
  };
  const addUser = (name, password, role, status, data) => {
    setUser([
      ...user,
      {
        name: name,
        password: password,
        role: role,
        status: status,
        data: data,
      },
    ]);
  };

  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
