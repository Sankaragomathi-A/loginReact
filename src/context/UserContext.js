import { useState, createContext } from "react";

export const UserContext = createContext({
  name: "",
  auth: false,

  user: [],
  addUser: () => {},
  updateUser:()=>{},
  deleteItem: () => {},
  getUserData: () => {},
  getId: "",

  networkData: [],
  addNetworkData: () => {},
  updateNetworkData: () => {},
  deleteNetworkData: () => {},

  isLoggedIn: false,
});

export const UserProvider = ({ children }) => {
  // USER PAGE

  const [user, setUser] = useState([
    {
      id:1,
      name: "nithya",
      role: "SuperAdmin",
      status: "Active",
      password: 123,
      data:"dataa",

      auth: true,
    },
  ]);

  const addUser = ( name, role, status,password,data) => {
    setUser([
      ...user,
      { id: Math.floor(Math.random() * 100), name,role, status, password, data },
    ]);
    console.log(user);
  };


  const updateUser = (id, name, password, role, status, data) => {
    setUser(
      user.map((user) =>
        user.id === id ? { id, name, password, role, status, data } : user
      )
    );
  };


  const [getId, setGetId] = useState("");

  const getUserData = (id) => {
    setGetId(id);
  };

  const deleteItem = (id) => {
    setUser(user.filter((item) => item.id !== id));
  };



  const login = (name) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
  };
 

  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
      setShow: false,
    }));
  };
    

  //NETWORK PAGE
  const [networkData, setNetworkData] = useState([]);

  const addNetworkData = (network, description) => {
    setNetworkData([
      ...networkData,
      { id: Math.floor(Math.random() * 100), network, description },
    ]);
    console.log(networkData);
  };

  const updateNetworkData = (id, network, description) => {
    setNetworkData(
      networkData.map((networkData) =>
        networkData.id === id ? { id, network, description } : networkData
      )
    );
  };

  const deleteNetworkData = (id) => {
    setNetworkData(networkData.filter((networkData) => networkData.id !== id));
  };

  return (
    <UserContext.Provider
      value={{
        getId,
        getUserData,
        login,
        logout,

        user,
        addUser,
        deleteItem,
        updateUser,

        networkData,
        addNetworkData,
        updateNetworkData,
        deleteNetworkData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
