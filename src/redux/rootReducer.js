import { combineReducers } from "redux";
import transactionReducer from "./reducers";

const rootReducer = combineReducers({
  transactions: transactionReducer,
});

export default rootReducer;
