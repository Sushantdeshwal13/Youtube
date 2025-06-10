import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
    name: "search",
    initialState :  {

    },
    reducers:{
        chacheresults: (state, action) => {
            state = Object.assign(state, action.payload);
    },
}

})

export const { chacheresults } = searchslice.actions;
export default searchslice.reducer;