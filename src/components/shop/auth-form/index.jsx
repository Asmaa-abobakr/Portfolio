import {useLocation } from "react-router-dom";
import './register.css';
import Register from "./register";
import Login from "./login";

const AuthForm = ()=>{
    const path = useLocation();    
    if(path.pathname === '/register'){
        return(
            <Register/>
        )
    }
    else if (path.pathname === '/login'){
        return(
            <Login/>
        )
    }
}

export default AuthForm;