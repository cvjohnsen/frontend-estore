import { connect } from "react-redux";
import { addBuy } from "../actions/actions";
import { removeBuy } from "../actions/actions";
import { matchPath, useLocation } from "react-router";
import { Card, Button } from "react-bootstrap";

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
    <div id={props.shop.id} style={styles.card}>
      {/* <img src={props.shop.img} width="300px" /> */}
      {/* <h5>{props.shop.name}</h5>
      <h5>{props.shop.description}</h5>
      <h5>${props.shop.price}.99</h5> */}
      {/* {location.pathname === "/shop" && (
        <button onClick={handleAdd}>Add to Cart</button>
      )}
      {location.pathname === "/cart" && (
        <button onClick={handleRemove}>Remove</button>
      )} */}

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.shop.img} width="200px" />

        <Card.Body>
          <Card.Title>
            <h5>{props.shop.name}</h5>
          </Card.Title>
          <Card.Text>
            <h6>{props.shop.description}</h6>
            <h6>${props.shop.price}.99</h6>
          </Card.Text>
          {location.pathname === "/shop" && (
            <Button onClick={handleAdd} className="btn btn-secondary">
              Add to Cart
            </Button>
          )}
          {location.pathname === "/cart" && (
            <Button onClick={handleRemove} className="btn btn-secondary">
              Remove
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "spaceAround",
    flexDirection: "row",
  },
};

export default connect(null, { addBuy, removeBuy })(ShopItem);
