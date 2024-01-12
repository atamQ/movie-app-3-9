import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./reducers/books";
import userReducer from "./reducers/user/user";

export const store = configureStore({
    reducer: { books: booksReducer, user: userReducer }
});
