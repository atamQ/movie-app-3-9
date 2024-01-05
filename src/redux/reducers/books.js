import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({ //CreatSlice is a function that accepts an initial state, object of reducer functions
    name: "books",
    initialState: {
        list: [],
        filter: ""
    },
    reducers: {
        setBooks: (state, action) => {
            state.list = action.payload
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { setBooks, setFilter } = bookSlice.actions;
export default booksSlice.reducer;