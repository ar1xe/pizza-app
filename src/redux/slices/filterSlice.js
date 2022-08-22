import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryID: 0,
  sort: {
    name: "популярности",
    sortProp: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryID(state, action) {
      console.log("action", action);
      state.categoryID = action.payload;
    },
    setSortID(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryID, setSortID } = filterSlice.actions;

export default filterSlice.reducer;
