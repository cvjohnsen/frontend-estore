import { connect } from "react-redux";
import ShopItem from "./ShopItem";


const mapStateToProps = (state) => ({
  cart: state.cart,
  isLoading: state.isLoading,
  error: state.error,
});

function Cart(props) {
  const { isLoading, cart, error } = props;

 

  return (
    <div>
      {isLoading ? "LOADING PRODUCTS" : ""}
      {error ? error : ""}
      {cart.length > 0
        ? cart.map((item) => {
            return <ShopItem shop={item} key={item._id} />;
          })
        : ""}

      
    </div>
  );
}

export default connect(mapStateToProps, {})(Cart);
