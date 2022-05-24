import react, { useContext } from "react";
import styles from "./home.module.css";
import { UserContext } from "../../context/UserContext";
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user } = useContext(UserContext);
  // const [del, setDel] = useState(user);
  const navigate = useNavigate();
  console.log(user);

  // const handleDelete = () => {
  //   setDel(del.filter((item) => item.user !== user));
  // };

  return (
    <div className={styles.container}>
      <button style={{ width: "20%" }} onClick={() => navigate("/")}>
        Logout
      </button>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Login</th>
              <th>Role</th>
              <th>Status</th>
              <th>Data</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {user.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.role}</td>
                <td>{value.status}</td>
                <td>{value.data}</td>
                <td>
                  <button className={styles.details}>Details</button>
                  <button className={styles.delete}>Delete</button>
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
        <button className={styles}>Add new user</button>
      </div>
      <Modal></Modal>
    </div>
  );
}
export default Home;
