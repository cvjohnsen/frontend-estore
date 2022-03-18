import axios from "axios";

export const FETCH_ITEM_START = "FETCH_ITEM_START";
export const FETCH_ITEM_SUCCEED = "FETCH_ITEM_SUCCEED";
export const FETCH_ITEM_FAIL = "FETCH_ITEM_FAIL";

//Cart Features
export const ADD_BUY = "ADD_BUY";
export const REMOVE_BUY = "REMOVE_BUY";

//Add Cart:
// export const fetchItem = () => async (dispatch) => {
//   dispatch({ type: FETCH_ITEM_START });
// try {
//   const data = await axios.get("https://cvj-estore.herokuapp.com/product");
//   dispatch({ type: FETCH_ITEM_SUCCEED, payload: data.data.product_list });
//   // console.log(data);
// } catch (err) {
//   dispatch({ type: FETCH_ITEM_FAIL, payload: err.message });
// }

export const fetchItem = () => async (dispatch) => {
  dispatch({ type: FETCH_ITEM_START });
  axios
    .get("https://cvj-estore.herokuapp.com/product")
    .then((data) => {
      dispatch({ type: FETCH_ITEM_SUCCEED, payload: data.data.product_list });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ITEM_FAIL, payload: err.message });
    });
};

export const addBuy = (buy) => (dispatch) => {
  dispatch({ type: ADD_BUY, payload: buy });
};

export const removeBuy = (buy) => (dispatch) => {
  dispatch({ type: REMOVE_BUY, payload: buy });
};
