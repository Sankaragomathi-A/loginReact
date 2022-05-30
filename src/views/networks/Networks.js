import react, { useContext, useState } from "react";
import styles from "../home/home.module.css";
import { UserContext } from "../../context/UserContext";
import { Button } from "react-bootstrap";
import NetWorkModal from "./NetWorkModal";
import { NavLink, useNavigate } from "react-router-dom";
// import styles from "../navbar/navbar.module.css";

function Networks() {
  const userContext = useContext(UserContext);
  const {  networkData,deleteNetworkData,updateNetworkData} = useContext(UserContext);
 
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  const [editable, setIsEditable] = useState(null);

console.log(networkData);
const showModal = () => {
  setOpenModal(true);
};

const closeModal = () => {
  setOpenModal(false);
};

const showEditModal = () => {
  setOpenEditModal(true);
};

const closeEditModal = () => {
  setOpenEditModal(false);
  // setIsEditable(null);
};


let currentNetwork;
  const newfunc = (id) => {
    setIsEditable(id);
    console.log(currentNetwork);
    
  };
  console.log(currentNetwork);

  return (
    <div className={styles.container}>
      <div>
        <div>Aequalis</div>
        <NavLink className={styles.NavLink} to="/home">
          Users
        </NavLink>
        <NavLink className={styles.NavLink} to="/home/network">
          Networks
        </NavLink>
        <button style={{ width: "20%" }} onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ padding: "20px 70px" }}>Network</th>
              <th>description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {networkData.length !== 0 &&
              networkData.map((data) => (
                <tr key={data.id}>
                  <td>{data.network}</td>
                  <td>{data.description}</td>
                  <td>
                    <button  onClick={() => newfunc(data.id)} type="button">Edit</button>
                    <button onClick={() => deleteNetworkData(data.id)} className={styles.delete} type="button">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
          <button
          type="button"
          
          onClick={showModal}
        >
          Add New Network
        </button>
         {openEditModal && (
        <NetWorkModal closeModal={closeEditModal} id={editable} type="EDIT" />
      )}
      {openModal && <NetWorkModal closeModal={closeModal} type="ADD" />}
        {/* <Button onClick={() => setModalShow(true)}>Add new network</Button>
        <NetWorkModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      </div>
    </div>
  );
}
export default Networks;
