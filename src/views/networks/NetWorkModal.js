import react, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    if (type === "EDIT") {
      console.log(networkData);
      console.log(currentNetwork);

      networkInputRef.current.value = currentNetwork.network;
      descriptionInputRef.current.value = currentNetwork.description;
    }
  });

  const networkChangeHandler = (event) => {
    event.preventDefault();
    setNetwork(event.target.value);
    if (event.target.value === "") {
      setNetworkError(true);
    } else {
      setNetworkError(false);
    }
  };

  const descriptionChangeHandler = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
    if (event.target.value === "") {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "ADD") {
      addNetworkData(network, description);
      setNetwork("");
      setDescriptionError("");
    }
    if (type === "EDIT") {
      updateNetworkData(id, network, description);
      networkInputRef.current.value = "";
      descriptionInputRef.current.value = "";
    }
    navigate("/home/network", { replace: true });

    // console.log(e.target.value);
    // addNetworkData(enteredNetwork, enteredDescription);
    // setNetwork("");
    // setDescriptionError("");
    // console.log(network, description);
  };

  return (
    <div>
      <form>
        {type === "ADD" && <h3>Create new Network</h3>}
        {type === "EDIT" && <h3>Edit Network</h3>}

        <button onClick={closeModal}>X</button>
        <label>Name</label>
        <input
          type="text"
          value={network}
          onChange={networkChangeHandler}
          ref={networkInputRef}
        ></input>

        <br></br>

        <label>Description</label>
        <input
          type="text"
          value={description}
          ref={descriptionInputRef}
          onChange={descriptionChangeHandler}
        ></input>

        <br></br>

        {/* <input
              style={{ width: "30%" }}
              type="text"
              name="name"
              onChange={(e) => setRole(e.target.value)}
            ></input> */}
        <br></br>

        {/* <input
              style={{ width: "30%" }}
              type="text"
              onChange={(e) => setStatus(e.target.value)}
            ></input> */}

        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
export default NetWorkModal;

{
  /* <form>
        <label>Login</label>
        <input
          style={{ width: "30%" }}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <label>password</label>
        <input
          style={{ width: "30%" }}
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <label>role</label>
        <input
          style={{ width: "30%" }}
          type="text"
          name="name"
          onChange={(e) => setRole(e.target.value)}
        ></input>
        <br></br>
        <label>status</label>
        <input
          style={{ width: "30%" }}
          type="text"
          onChange={(e) => setStatus(e.target.value)}
        ></input>
        <br></br>
        <label>data</label>
        <input
          style={{ width: "30%" }}
          type="text"
          onChange={(e) => setDataJson(e.target.value)}
        ></input>
        <br></br>

        <button onClick={handleSubmit}>Save</button>
      </form>
    </div> */
}
