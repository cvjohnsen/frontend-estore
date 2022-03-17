import {
  FETCH_ITEM_START,
  FETCH_ITEM_SUCCEED,
  FETCH_ITEM_FAIL,
} from "../actions/actions";

let initialState = {
  product: "",
  isLoading: false,
  error: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM_START:
      return {
        ...state,
        product: "",
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
    default:
      return state;
  }
}

export default reducer;
