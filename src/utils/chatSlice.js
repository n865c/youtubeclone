import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chatData:[]
    },
    reducers: {
        livechat(state, action) {
            const maxLength = 50;
            if (state.chatData.length >= maxLength) 
                state.chatData.splice(0, state.chatData.length - maxLength + 1);
            state.chatData.push(action.payload);
        }
    }
})
export const { livechat } = chatSlice.actions;
export default chatSlice.reducer;