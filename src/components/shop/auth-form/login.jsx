import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux';
import {setIsLogged} from './../../../redux/authSlice';
import './register.css'

const Login = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onTouchend'});
    const onSubmit = (data) => {
        console.log("data: ",data);
        dispatch(setIsLogged(true));
        navigate('/shop');
    };
    console.log("errors: ", errors);
        return (
            <>
            <div className="form-container w-50 mx-auto my-5 p-4 rounded">
                <h3 className="mb-4 px-3">Login Form</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="px-3">
                {/* Email */}
                <label htmlFor="email">Email</label>
                <input 
                 placeholder="Email" 
                {...register("email", {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} 
                className = "input-feild p-2 mt-2 mb-2 w-100 rounded d-block"
                id="email"
                />
                {errors?.email?.type=== 'required' && <p className="error-msg">The email is required</p>}
                {errors?.email?.type === 'pattern' && <p className="error-msg">Invalid email (ex: sample@aaa.ppp)</p>}

                {/* Password */}
                <label htmlFor="password">Password</label>
                 <input 
                 placeholder="Password" 
                {...register("password", {required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*@%$#]).{8,}$/})} 
                className = "input-feild p-2 mt-2 mb-2 w-100 rounded d-block"
                id="password"
                />
                {errors?.password?.type === 'required' && <p className="error-msg">The password is required</p>}
                {errors?.password?.type === 'pattern' && <p className="error-msg">`User password is not valid.
                    The password contains at least 8 characters, at least one
                    lowercase , one uppercase , at least one digit
                    and special character [ example : *@%$# ]`</p>}
               
                <input type="submit" className="btn-submit d-block rounded " />
                </form>
                <div className="my-2 d-flex justify-content-center">
                    <p className="text-center px-2">Don’t have account ?  </p>
                    <Link to="/register">Register</Link>
                </div>
            </div>
            </>
        )
}

export default Login;