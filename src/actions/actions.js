import axios from "axios";

export const FETCH_ITEM_START = "FETCH_AFFIRM_START";
export const FETCH_ITEM_SUCCEED = "FETCH_AFFIRM_SUCCEED";
export const FETCH_ITEM_FAIL = "FETCH_AFFIRM_FAIL";

//Cart Features
// export const ADD_CART = "ADD_CART";
// export const REMOVE_CART = "REMOVE_CART";

//Add Cart
// export const addCart = (cart) => (dispatch) => {
//   dispatch({ type: ADD_CART, payload: cart });
// };
// export const removeCart = (cart) => (dispatch) => {
//   dispatch({ type: REMOVE_CART, payload: cart });
// };

export const fetchItem = () => async (dispatch) => {
  dispatch({ type: FETCH_ITEM_START });

  try {
    const data = await axios.get("https://cvj-estore.herokuapp.com/product");
    dispatch({ type: FETCH_ITEM_SUCCEED, payload: data.data.product_list });
    // console.log(data);
  } catch (err) {
    dispatch({ type: FETCH_ITEM_FAIL, payload: err.message });
  }
};
