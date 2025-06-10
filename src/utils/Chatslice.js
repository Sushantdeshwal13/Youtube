import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    messages: [],
  },
  reducers:{
    addmessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT,1); // Limit to 10 messages
        state.messages.push(action.payload);
        }
  }
});

export const { addmessage } = chatsSlice.actions;
export default chatsSlice.reducer;