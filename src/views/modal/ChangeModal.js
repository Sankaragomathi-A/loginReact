import react, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { Button, Modal } from "react-bootstrap";
import { parsePath, useNavigate } from "react-router-dom";

function ChangeModal(props) {
  const { user, addUser, updateUser } = useContext(UserContext);

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("Admin");
  const [status, setStatus] = useState("Active");
  const [data, setData] = useState();
  console.log(addUser);

  const closeModal = props.closeModal;
  const type = props.type;
  const propsId = props.data.id;

  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const statusInputRef = useRef();
  const roleInputRef = useRef();
  const dataInputRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    if (type === "edit") {
      nameInputRef.current.value = props.data.name;
      passwordInputRef.current.value = props.data.password;
      statusInputRef.current.value = props.data.status;
      roleInputRef.current.value = props.data.role;
      dataInputRef.current.value = props.data.data;
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredRole = roleInputRef.current.value;
    const enteredStatus = statusInputRef.current.value;
    const enteredData = dataInputRef.current.value;

    // console.log(e.target.value);
    // addUser(name, role, status, password, data);
    // console.log(name, role, status, password, data);

    if (type === "add") {
      addUser(
        enteredName,
        enteredPassword,
        enteredRole,
        enteredStatus,
        enteredData
       
      );
    }
    if (type === "edit") {
      updateUser(
        propsId,
        enteredName,
        enteredPassword,
        enteredRole,
        enteredStatus,
        enteredData
     
      );
    }
    nameInputRef.current.value = "";
    passwordInputRef.current.value = "";
    roleInputRef.current.value = "";
    statusInputRef.current.value = "";
    dataInputRef.current.value = "";
    navigate("/home", { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        {type === "add" && <h2> Create new user</h2>}
        {type === "edit" && <h2>Edit User</h2>}
  <button onClick={closeModal}>X</button>
        <label>Name</label>
        <input type="text" ref={nameInputRef}></input>
        <br></br>

        <label>role</label>

        <select ref={roleInputRef}>
          <option value="Admin">Admin</option>
          <option value="Client">Client</option>
        </select>

        <label>status</label>
        <br></br>
        <select ref={statusInputRef}>
          <option value="Active">Active</option>
          <option value="Logout">Logout</option>
          <option value="Disabled">Disabled</option>
        </select>

        <label>password</label>
        <input type="text" ref={passwordInputRef}></input>
        <br></br>

        <label>data</label>
        <input type="text" ref={dataInputRef}></input>
        <br></br>

        <button onClick={closeModal}>Cancel</button>
        <button>Save</button>
      </form>
    </div>
  );
}
export default ChangeModal;
