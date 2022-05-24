import react, { useContext, useState } from "react";
import styles from "./login.module.css";
import { UserContext } from "../../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  console.log(user);

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

        console.log("login success");
      } else {
        console.log("Not equal login");
      }
    });

    // console.log(user[0].name);
    // console.log(user[0].password);
  };
  return (
    <div className="container">
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
