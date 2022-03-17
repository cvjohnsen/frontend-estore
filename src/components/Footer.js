const Footer = () => {
  return (
    <div style={container}>
      <p>
        &copy; Copyright {new Date().getFullYear()} Cynthia V. Johnsen - All
        Rights Reserved
      </p>
    </div>
  );
};

const container = {
  backgroundColor: "#d2d7df",
  color: "#0F0F0F",
  height: "40px",
  marginTop: "300px",
  fontFamily: "Shadows Into Light Two",
  textAlign: "center",
};

export default Footer;
