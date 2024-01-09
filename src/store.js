import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./reducers/hackerNewsreducer";

export default configureStore({
    reducer: hackerNewsReducer
})