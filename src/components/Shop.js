import { connect } from "react-redux";
import { fetchItem } from "../actions/actions";
import { useEffect } from "react";
import ShopItem from "./ShopItem";



const mapStateToProps = (state) => ({
  product: state.product,
  isLoading: state.isLoading,
  error: state.error,
});

function Shop(props) {
  const { fetchItem, isLoading, product, error } = props;
  useEffect(() => {
    fetchItem();
  }, [fetchItem]);
  console.log(props);

  return (
    <div>
      {isLoading ? "LOADING PRODUCTS" : ""}
      {error ? error : ""}
      {product.length > 0
        ? product.map((item) => {
            return <ShopItem shop={item} key={item._id} />;
          })
        : ""}

    </div>
  );
}

export default connect(mapStateToProps, { fetchItem })(Shop);
