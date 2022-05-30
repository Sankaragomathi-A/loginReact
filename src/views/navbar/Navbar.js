import React from "react";

import { NavLink, Navigate } from "react-router-dom";
import navbar from "./navbar.module.css";

function Navbar() {
  const navigate = Navigate();
  return (
    // <div className={styles.container}>
    //   <div className="d-flex justify-content-between">
    //     <div className={styles.dstart}>
    //       <NavLink className={styles.navLink}>Aequalis</NavLink>

    //       <NavLink className={styles.navLink}>Users</NavLink>
    //       <NavLink className={styles.navLink}>Network</NavLink>
    //     </div>
    //     <div>
    //       <NavLink>Logout</NavLink>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div>Aequalis</div>
      <NavLink to="/home">Users</NavLink>
      <NavLink to="/home/network">Networks</NavLink>
      <button style={{ width: "20%" }} onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}
export default Navbar;
