import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

export default function configureStore() {
  const composeEnhancers = compose;
  const middleWares = [thunk];
  const enhancer = composeEnhancers(applyMiddleware(...middleWares));

  const store = createStore(reducer, enhancer);

  return store;
}
