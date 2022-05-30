import react, { useContext, useState } from "react";
import styles from "./login.module.css";
import { UserContext } from "../../context/UserContext";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Login() {
  // const [navbar, setNavbar] = useState(false);
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  console.log(user);
  // const { setShow } = useContext.setShow;
  // console.log(setShow);

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    user.forEach((element, index, array) => {
      console.log(element.name, element.password, login, password);

      if (element.name == login && element.password == password) {
        navigate("/home");
        <p>Login and password successfully!..</p>;
        console.log("login success");
      } else {
        <p>Login and password does not match.!</p>;
        console.log("Not equal login");
      }
    });
    // setNavbar(true);
    // console.log(user[0].name);
    // console.log(user[0].password);
  };
  return (
    <div>
      <div>
        <form>
          <label className={styles.label}>Login</label>
          <br></br>
          <input type="text" name={login} onChange={handleLogin}></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input type="text" name={password} onChange={handlePassword}></input>
          <br></br>
          <button className={styles.button} onClick={handleClick}>
            login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
