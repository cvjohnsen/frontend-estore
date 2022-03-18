import { connect } from "react-redux";
import { addBuy } from "../actions/actions";
import { removeBuy } from "../actions/actions";
import { matchPath, useLocation } from "react-router";

const ShopItem = (props) => {
  console.log(props);
  const match = matchPath("/shop");
  const location = useLocation();
  console.log(location.pathname);
  const handleAdd = (e) => {
    props.addBuy(props.shop);
    // console.log(e.target.id);
  };
  const handleRemove = (e) => {
    props.removeBuy(props.shop);
  };

  return (
    <div id={props.shop.id}>
      <img src={props.shop.img} width="300px" />
      <h5>{props.shop.name}</h5>
      <h5>{props.shop.description}</h5>
      <h5>${props.shop.price}.99</h5>
      {location.pathname === "/shop" && (
        <button onClick={handleAdd}>Add to Cart</button>
      )}
      {location.pathname === "/cart" && (
        <button onClick={handleRemove}>Remove</button>
      )}
      <br />
      <br />
    </div>
  );
};

export default connect(null, { addBuy, removeBuy })(ShopItem);
