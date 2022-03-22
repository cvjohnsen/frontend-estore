import logo from "../CVJ-Stack-Logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.title}>
      <h1>Shop our March Collection today!</h1>
      <div style={styles.image}>
        <Link to="/">
          <img src={logo} width="500px" alt="logo" />
        </Link>
      </div>
    </div>
  );
};

const styles = {
  title: {
    fontFamily: "Anton",
  },
  image: {
    marginTop: "50px",
    height: "450px",
  },
};

export default Home;
