import { connect } from "react-redux";

const ShopItem = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.shop.img} width="300px"/>
      <h5>{props.shop.name}</h5>
      <h5>{props.shop.description}</h5>
      <h5>${props.shop.price}.99</h5>
      <br />
      <br />
    </div>
  );
};

export default connect(null)(ShopItem);
