import react, { useContext, useState } from "react";
import styles from "./home.module.css";
import { UserContext } from "../../context/UserContext";

import { useNavigate, NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Popup from "./Popup";
import CustomModal from "../modal/Modal";
import ChangeModal from "../modal/ChangeModal";

function Home(props) {
  console.log(props);

  // const [modalShow, setModalShow] = useState(false);
  const { user, deleteItem, getUserData } = useContext(UserContext);

  const navigate = useNavigate();
  console.log(user);

  console.log(deleteItem);

  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const [editable, setIsEditable] = useState(null);

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
        <NavLink className={{ padding: "5px" }} to="/home">
          Users
        </NavLink>
        <NavLink to="/home/network">Networks</NavLink>
        <button style={{ width: "20%" }} onClick={() => navigate("/")}>
          Logout
        </button>
      </div>

      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>password</th>

              <th>Data</th>

              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {user.length !== 0 &&
              user.map((data) => (
                <tr key={data.id}>
                  <td>{data.name} </td>
                  <td>{data.role}</td>
                  <td>{data.status} </td>
                  <td>{data.password} </td>
                  <td>{data.data} </td>

                  <td className={styles.buttonBtn}>
                    <Link to={`/user/${data.id}`}>
                      <button
                        className={styles.details}
                        onClick={() => getUserData(data.id)}
                        type="button"
                      >
                        Details
                      </button>
                    </Link>
                    <button
                      className={styles.delete}
                      onClick={() => deleteItem(data.id)}
                    >
                      Delete
                    </button>
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
        {/* <Button onClick={() => setModalShow(true)}>Add new network</Button>
        <ChangeModal show={modalShow} onHide={() => setModalShow(false)} />
  */}

        <button type="button" onClick={showModal}>
          Add New User
        </button>
        
        {openModal && ( <CustomModal closeModal={closeModal} type="add" />)}
        {openEditModal && (
          <CustomModal closeModal={closeModal} type="edit" />
        )}
    
      </div>
    </div>
  );
}
export default Home;
