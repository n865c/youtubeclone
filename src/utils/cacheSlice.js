import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "cache",
    initialState: {  },
    reducers: {
        setCacheData(state, action) {
            state=Object.assign(state, action.payload);
        },
    }
})
export const {setCacheData}= cacheSlice.actions;
export default cacheSlice.reducer;