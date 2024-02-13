import { ADD_TRANSACTION } from "./actionTypes";

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

