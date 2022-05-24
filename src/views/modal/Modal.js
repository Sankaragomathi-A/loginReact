import react, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

function Modal() {
  const { user, addUser } = useContext(UserContext);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [status, setStatus] = useState();
  const [datajson, setDataJson] = useState();
  console.log(addUser);

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    addUser(name, password, role, status, datajson);
  };

  return (
    <div>
      <form>
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
    </div>
  );
}
export default Modal;
