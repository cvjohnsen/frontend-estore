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
        <a
          href="https://us.shein.com/designer/2611?ici=us_tab01navbar04menu07dir06&scici=navbar_WomenHomePage~~tab01navbar04menu07dir06~~4_7_6~~webLink~~~~0&fbclid=IwAR1dMoKiapx13VMnwSlcLGoAFYiIVD3RkImWdha_vXWZWP8mQJ1xVWe8kEw"
          target="_blank"
          rel="noreferrer"
          alt="shein"
        >
          <img src={promo} alt="promo" class="img-fluid" width="600px" />
        </a>
      </div>
    </div>
  );
};

const styles = {
  body: {
    height: "900px",
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
