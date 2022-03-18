import logo from "../CVJ-Stack-Logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Shop our March Collection today</h1>
      <div style={image}>
        <Link to="/">
          <img src={logo} width="500px" alt="logo" />
        </Link>
      </div>
      ;
    </div>
  );
};

const image = {
  marginTop: "50px",
  height: "450px",
};

export default Home;
