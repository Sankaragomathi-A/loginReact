import react, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from '../modal/Modal.module.css'
function NetWorkModal(props) {
  const closeModal = props.closeModal;
  const { networkData, addNetworkData, updateNetworkData } =
    useContext(UserContext);
  const [network, setNetwork] = useState();
  const [description, setDescription] = useState();

  const [networkError, setNetworkError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const navigate = useNavigate();

  console.log(addNetworkData);

  console.log(networkData);

  const type = props.type;
  const id = props.id;
  const networkInputRef = useRef();
  const descriptionInputRef = useRef();

  const currentNetwork = networkData.find((item) => item.id === parseInt(id));

 

  

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "ADD") {
      addNetworkData(network, description);
      setNetwork("");
      setDescriptionError("");
    }
    if (type === "EDIT") {
      updateNetworkData(id, network, description);
      updateNetworkData(props.data.id,network,description)
    }
    navigate("/home/network", { replace: true });
    closeModal();
    // console.log(e.target.value);
    // addNetworkData(enteredNetwork, enteredDescription);
    // setNetwork("");
    // setDescriptionError("");
    // console.log(network, description);
  };

  return (
    <form className={classes.modalForm} onSubmit={handleSubmit}>
    <div className={classes.createNewUser}>
      {type === "ADD" && <h3> Create new user</h3>}
      {type === "EDIT" && <h3>Edit User</h3>}
      <button className={classes.xButton} onClick={closeModal}>
        X
      </button>
    </div>

    <div className={classes.login}>
      <label>Name</label>
      <input
        type="text"
        placeholder="login"
        onChange={(e) => setNetwork(e.target.value)}
        ref={networkInputRef}
      />
    </div>
   
         
    <div className={classes.password}>
      <label>Password</label>
      <br></br>
      <input
        type="text"
        name="description"
        placeholder="password"
        onChange={(e) => setDescription(e.target.value)}
        ref={descriptionInputRef}
      />
    </div>
   
    <div className={classes.formButtons}>
      <button className={classes.cancelButton} onClick={closeModal}>
        Cancel
      </button>
      <button className={classes.saveButton}>Save</button>
    </div>
  </form>
  )
}
export default NetWorkModal
