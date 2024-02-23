import { createSlice } from "@reduxjs/toolkit";

const sliceStore = createSlice({
    name: "store",
    initialState:{
        toggle:true,
    },
    reducers: {
        toggleTheme: (state) => {
            state.toggle = !state.toggle;
        },
        permenantToggle: (state) => {
            state.toggle=false
        }
    }
})
export const { toggleTheme, permenantToggle } = sliceStore.actions;
export default  sliceStore.reducer;