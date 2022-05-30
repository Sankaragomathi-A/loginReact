import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Login from "./views/login/Login";

import Networks from "./views/networks/Networks";

import EditUser from "./views/modal/EditUser";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route path="/user/:id" element={<EditUser />} />

          <Route path="/home" element={<Home/>}></Route>

          {/* <Route path="/edit" element={<EditUser></EditUser>}></Route> */}
          <Route path="/home/network" element={<Networks></Networks>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
