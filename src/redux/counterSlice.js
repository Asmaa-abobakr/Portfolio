import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0
}


// reducer
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        setCountervalue:(state, action)=>{
            if(action.payload && (Number(action.payload)  >= 0)){
                state.counter = Number(action.payload);
            }
            else{
                alert("Invalid Number!!\n\nThe number must be greater than or equal 0");
            }    
        },
        incrementCounter: (state) =>{
            state.counter = state.counter + 1;
        },
        decrementCounter: (state) =>{
            state.counter > 0? state.counter = state.counter - 1: state.counter = 0;
        },
        resetCounter: (state) =>{
            state.counter = 0;
        }
    }
});



// action
export const {incrementCounter, decrementCounter, resetCounter, setCountervalue} = counterSlice.actions;

// export:
export default counterSlice.reducer;