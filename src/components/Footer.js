const Footer = () => {
  return (
    <div style={styles.container}>
      <div>
        <a
          href="https://www.instagram.com/cynthia_v_johnsen/"
          target="_blank"
          rel="noreferrer"
          alt="instagram"
          className="icon"
        >
          <i class="fa-brands fa-instagram fa-xl"></i>
        </a>
        &nbsp;
        <a
          href="https://www.facebook.com/cynthiavjohnsen/"
          target="_blank"
          rel="noreferrer"
          alt="facebook"
        >
          <i class="fa-brands fa-facebook fa-xl"></i>
        </a>
      </div>
      <p>
        &copy; Copyright {new Date().getFullYear()} Cynthia V. Johnsen - All
        Rights Reserved
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#d2d7df",
    color: "#0F0F0F",
    height: "60px",
    marginTop: "300px",
    fontFamily: "Anton",
    textAlign: "center",
  },
};
export default Footer;
