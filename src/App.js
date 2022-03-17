import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Shop from "./components/Shop";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
