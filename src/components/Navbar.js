import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={container}>
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>
      <Link to="/affirmation" style={{ color: "white" }}>
        Affirmation
      </Link>
    </nav>
  );
};

const container = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#353535",
  color: "white",
  height: "40px",
  fontFamily: "Architects Daughter",
};

export default NavBar;
