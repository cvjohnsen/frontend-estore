import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Shop from "./components/Shop";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Body">
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
