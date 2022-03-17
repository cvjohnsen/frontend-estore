import logo from "../CVJ-Stack-Logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div style={image}>
        <Link to="/">
          <img src={logo} width="300px" alt="logo" />
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
