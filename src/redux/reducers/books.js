import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({ //CreatSlice is a function that accepts an initial state, object of reducer functions
    name: "books",
    initialState: [],
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        }
    }
});

export const { setBooks } = bookSlice.actions;
export default booksSlice.reducer;