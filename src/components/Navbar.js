import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={container}>
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>
      <Link to="/shop" style={{ color: "white" }}>
        Shop
      </Link>
    </nav>
  );
};

const container = {
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "#353535",
  color: "white",
  height: "40px",
  fontFamily: "Architects Daughter",
};

export default NavBar;
