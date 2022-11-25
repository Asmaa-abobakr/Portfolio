import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    btnState: {},
    cartQuantity: 0,
    cartProducts: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        resetQuantity: (state)=>{
            state.cartQuantity = 0;
            state.btnState = {};
            state.cartProducts = [];
            state.totalPrice = 0;
        },
        setBtnState : (state, action)=>{    // state of button 
            console.log(action);
            state.btnState[action.payload.id] = action.payload.state;
        },
        addToCart:(state, action)=>{      // add new item to cart products array
            state.cartQuantity = state.cartQuantity + 1;
            state.cartProducts = [...state.cartProducts, action.payload];
            console.log("state before : ", state.totalPrice);
            console.log("action before : ", Number(action.payload.price));

            // increment the total price
            state.totalPrice = (Number(state.totalPrice) + Number(action.payload.price)).toFixed(2);
            console.log("price: ", state.totalPrice);
        },
        removeFromCart: (state, action)=>{   // remove item from the cart products array
            state.cartQuantity = state.cartQuantity - 1;
            state.cartProducts = state.cartProducts.filter((item)=>{
                return !(item.id === action.payload.id);
            });
            // console.log(state.cartProducts);
            // decrement the total price
            state.totalPrice = (Number(state.totalPrice) - Number(action.payload.price)).toFixed(2);
        }
    }
});

export default cartSlice.reducer;
export const {setBtnState, addToCart, removeFromCart, resetQuantity} = cartSlice.actions