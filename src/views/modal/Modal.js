import { useRef, useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

const CustomModal = (props) => {
  const { user, addUser, updateUser } = useContext(UserContext);

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("Admin");
  const [status, setStatus] = useState("Active");
  const [data, setData] = useState();
  const navigate = useNavigate();

  const closeModal = props.closeModal;
  const type = props.type;
  console.log(props.type);
  const id = props.id;

  const nameInputRef = useRef();
  const roleInputRef = useRef();
  const statusInputRef = useRef();
  const passwordInputRef = useRef();
  const dataInputRef = useRef();

  const currentUser = user.find((item) => item.id === parseInt(id));

  // const currentUserId = props.match.params.id;
  // console.log(currentUserId);

  console.log(addUser);

 

  const submitHandler = (event) => {
    event.preventDefault();
   
    if (type === "add") {
      addUser(name ,role, status,password, data);
    }
    if (type === "edit") {
      console.log(props.data.id);
      updateUser(props.data.id, name, role, status, password,data);

      
    }

    navigate("/home", { replace: true });
    closeModal();
  };

  return (
    <form className={classes.modalForm} onSubmit={submitHandler}>
      <div className={classes.createNewUser}>
        {type === "add" && <h3> Create new user</h3>}
        {type === "edit" && <h3>Edit User</h3>}
        <button className={classes.xButton} onClick={closeModal}>
          X
        </button>
      </div>

      <div className={classes.login}>
        <label>Login</label>
        <input
          type="text"
          placeholder="login"
          onChange={(e) => setName(e.target.value)}
          ref={nameInputRef}
        />
      </div>
      <div className={classes.roleStatus}>
        <div className={classes.role}>
          <label>Role</label>
          <select
            onChange={(e) => setRole(e.target.value)}
            className={classes.selectHeight}
            required
            ref={roleInputRef}
          >
            <option value="Admin">Admin</option>
            <option value="Client" selected="selected">
              Client
            </option>
          </select>
        </div>
        <div className={classes.status}>
          <label>Status</label>
          <select
            onChange={(e) => setStatus(e.target.value)}
            className={classes.selectHeight}
            required
            ref={statusInputRef}
          >
            <option value="Active" selected="selected">
              Active
            </option>
            <option value="Offline">Offline</option>
          </select>
        </div>
      </div>

      <div className={classes.password}>
        <label>Password</label>
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordInputRef}
        />
      </div>
      <div className={classes.dataArea}>
        <label>Data (json)</label>
        <textarea
          type="text"
          className="form-control"
          rows="1"
          onChange={(e) => setData(e.target.value)}
          ref={dataInputRef}
        />
      </div>
      <div className={classes.formButtons}>
        <button className={classes.cancelButton} onClick={closeModal}>
          Cancel
        </button>
        <button className={classes.saveButton}>Save</button>
      </div>
    </form>
  );
};

export default CustomModal;
