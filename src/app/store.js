import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slices/counterSlice";
import postReducer from "../slices/postsSlice";


export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        posts: postReducer
    }
})