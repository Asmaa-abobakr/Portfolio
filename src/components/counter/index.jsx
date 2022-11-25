// import { useState } from "react";
// import Navbar from "./navCounter";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from "../../redux/counterSlice";
import Button from "../button/button";

import './counter.css'

const CounterContainer = ()=>{
    // VARIABLES:
    // using State:
    // let [counterVal, setCounterVal] = useState(0);  // counter with initial value
    // using redux:
    const gCounter = useSelector(state => state.counterStore.counter);   
    const dispatch = useDispatch();

    // METHODS:
    // increment method
    const increment = () =>{
        // setCounterVal(++counterVal);    // using state
        dispatch(incrementCounter());      // using redux
    }
    // decrement method
    const decrement = () =>{
        // counterVal > 0? setCounterVal(--counterVal): setCounterVal(0);   // using state
        dispatch(decrementCounter());
    }
    // reset method
    const reset = () =>{
        // setCounterVal(0)
        dispatch(resetCounter());
    }

    return(
        <>
           <div className="counter-container">
            <div className="app-title">
                <h2>Counter APP</h2>
            </div>
                <div className="app-content">
                    <div className="button-container">
                        <Button btnMethod = {increment} btnName="Increment" />  
                        <Button btnMethod = {decrement} btnName="Decrement" />
                        <Button btnMethod = {reset} btnName="Reset"/>
                    </div>
                    <p className="pt-5">{gCounter}</p>
                </div>
            </div>
        </>
    )
}

export default CounterContainer;
