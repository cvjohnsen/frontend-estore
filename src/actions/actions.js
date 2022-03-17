import axios from "axios";

export const FETCH_ITEM_START = "FETCH_AFFIRM_START";
export const FETCH_ITEM_SUCCEED = "FETCH_AFFIRM_SUCCEED";
export const FETCH_ITEM_FAIL = "FETCH_AFFIRM_FAIL";

export const fetchAffirm = () => async (dispatch) => {
  dispatch({ type: FETCH_ITEM_START });

  try {
    const data = await axios.get("https://cvj-estore.herokuapp.com/product");
    dispatch({ type: FETCH_ITEM_SUCCEED, payload: data.data.product_list._id });
  } catch (err) {
    dispatch({ type: FETCH_ITEM_FAIL, payload: err.message });
  }
};
