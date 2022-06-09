import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import CustomModal from "./Modal";
import style from "./EditUser.module.css";
import { Button } from "react-bootstrap";

// import classes from './EditUser.module.css';

const EditUser = () => {
  const userContext = useContext(UserContext);
  // const [modalShow, setModalShow] = useState(false);

  const { user, getId } = useContext(UserContext);
  const { id } = useParams();
  console.log(user);

  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  console.log(user, getId);

  return (
    <div>
      <div className={style.nav}>
        <Link to="/home">Users / </Link> {id}
      </div>

      <div>
        {user
          .filter((user) => user.id === getId)
          .map((user) => (
            <div className={style.containerBox}>
              <div className={style.header}>User</div>
              <div>
                <div>
                  <div className={style.userDetails}>
                    <label>login : </label>
                    <span>{user.name}</span>
                  </div>
                  <br></br>
                  <div className={style.userDetails}>
                    <label>Password : </label>
                    <span>{user.password}</span>
                  </div>
                  <br></br>
                  <div>
                    <label>Role : </label>
                    <span>{user.role}</span>
                  </div>
                  <br></br>
                  <div>
                    <label>Status :</label>
                    <p>{user.data}</p>
                    <br></br>
                  </div>
                </div>
                <div>
                  <div>
                    <label>Data :</label>
                    <span> {user.status} </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
           {openModal && (
                <CustomModal closeModal={closeModal} type="edit" data={user} />
              )}
              
        {/* <div style={{ marginTop: "20%", padding: "0%" }}>
          <Button className={style.editBtn} onClick={() => setModalShow(true)}>
            Edit user
          </Button>
          <CustomModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            type="edit"
            data={user}
          />
        </div> */}

<button className={style.editBtn} onClick={showModal} >
            Edit
          </button>
      </div>
    </div>
  );
};

export default EditUser;
