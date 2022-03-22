import logo from "../CVJ-Stack-Logo.png";
import promo from "../shein-promo1.JPG";

const Home = () => {
  return (
    <div style={styles.body}>
      <div style={styles.logo}>
        <img src={logo} width="200px" alt="logo" />
      </div>
      <div style={styles.title}>
        <h1>Shop our March Collection today!</h1>
      </div>
      <div style={styles.img}>
        <img src={promo} alt="promo" width="500px" />
      </div>

    </div>
  );
};

const styles = {
  body: {
    height: "650px",
  },
  title: {
    fontFamily: "Anton",
    marginTop: "80px",
  },
  logo: {
    marginTop: "20px",
  },
  img: {
    height: "100px",
    marginTop: "20px",
  },
};

export default Home;
