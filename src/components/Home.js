import logo from "../CVJ-Stack-Logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} width="100px" alt="logo" />
      </Link>
    </div>
  );
};

export default Home;
