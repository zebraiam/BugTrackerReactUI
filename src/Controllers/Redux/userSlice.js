import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state)=>{
            state.push({name:"Sushan Subba"})
            state.push({name:"Prashan Subba"})
        }
    }
})

export default slice.reducer;
export const{getUser} = slice.actions;