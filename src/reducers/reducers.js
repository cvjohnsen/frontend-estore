import {
  FETCH_ITEM_START,
  FETCH_ITEM_SUCCEED,
  FETCH_ITEM_FAIL,
  ADD_BUY,
  REMOVE_BUY,
} from "../actions/actions";

let initialState = {
  product: [],
  cart: [],
  isLoading: false,
  error: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM_START:
      return {
        ...state,
        product: [],
        isLoading: true,
      };
    case FETCH_ITEM_SUCCEED:
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };
    case FETCH_ITEM_FAIL:
      return {
        ...state.isLoading,
        isLoading: false,
        error: action.payload,
      };
    case ADD_BUY:
      // console.log(action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_BUY:
      let newState = state.cart.filter((buy) => buy !== action.payload);
      return {
        ...state,
        cart: newState,
      };
    default:
      return state;
  }
}

export default reducer;
