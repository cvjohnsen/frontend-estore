import { createStore, applyMiddleware } from "redux";
//import reducer
import reducer from "./reducers/reducers";

import thunk from "redux-thunk";
//create store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
