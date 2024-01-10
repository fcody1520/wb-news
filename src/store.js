import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./reducers/hackerNewsreducer";
import mediumReducer from "./reducers/mediumReducer";

export default configureStore({
    reducer: {
        hackerNews: hackerNewsReducer,
        medium: mediumReducer
    }
})