import { createSlice } from "@reduxjs/toolkit";

// initialization
const initialState = {
    islogged: false
}

// reducer
const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers:{
        setIsLogged: (state, action) =>{
            console.log("islogged: ",action.payload);
            state.islogged = action.payload;
        }
    }
})

export default authSlice.reducer;
// action
export const {setIsLogged} = authSlice.actions;