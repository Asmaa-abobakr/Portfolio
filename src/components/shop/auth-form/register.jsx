import { useForm, Controller     } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Select from 'react-select';
import {useDispatch} from 'react-redux';
import {setIsLogged} from './../../../redux/authSlice';
import './register.css'

const Register = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const islogged = useSelector(state => state.authStore.islogged);
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm({mode: 'onTouchend'});
    const onSubmit = (data) => {
        console.log("data: ",data);
        dispatch(setIsLogged(true));
        navigate('/shop');
    };
    console.log("errors: ", errors);
    const options = [
        { value: 'Alexandria', label: 'Alexandria' },
        { value: 'Aswan', label: 'Aswan' },
        { value: 'Cairo', label: 'Cairo' }
      ]
    const customStyle = {
        control: (base,state)=>({
            ...base,
            background: "#dedcd6"
        })
    }
      
    return (
        <>
        <div className="form-container w-50 mx-auto my-5 p-4 rounded">
            <h3 className="mb-4 px-3">Registration Form</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="px-3">
            {/* Name */}
            <label htmlFor="name">Name</label>
            <input 
                placeholder="Name" 
            {...register("name", {required: true})} 
            className = "input-feild p-2 mt-2 mb-2 w-100 rounded d-block"
            id="name"
            />
            {errors?.name?.type === 'required' && <p className="error-msg">The name is required</p>}

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
            {/* Phone Number*/}
            <label htmlFor="phone">Phone Number</label>
            <input 
                placeholder="Phone Number" 
            {...register("Phone", {required: true})} 
            className = "input-feild p-2 mt-2 mb-2 w-100 rounded d-block"
            id="phone"
            />
            {errors?.phone?.type === 'required' && <p className="error-msg">The phone number is required</p>}
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
            {/* Confirm Password */}
            <label htmlFor="confPassword">Confirm Password</label>
            <input 
                placeholder="Repeat Password" 
            {...register("confirmPassword", {required: true, validate: (value)=> {
                const pass = watch().password;
                return pass === value || "password should match"
            }})} 
            className = "input-feild p-2 mt-2 mb-2 w-100 rounded d-block"
            id="confPassword"
            />
            {errors?.confirmPassword?.type ==='required' && <p className="error-msg">The confirm password is required</p>}
            {errors?.confirmPassword?.type ==='validate' && <p className="error-msg">The password should match</p>}
            
            {/* Select */}
            <label htmlFor="city">City</label>
            <Controller
                name="select"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Select 
                {...field} 
                options = {options}
                styles={customStyle}
                className= "input-feild mb-3"
                id="city"
                />}
                />
                {errors?.select?.type ==='required' && <p className="error-msg">Select is required</p>}

                {/* Checkbox */}
                <label>
                <input type="checkbox"
                className="input-feild mx-2 mb-3"
                name="checkbox"
                {...register("checkbox", {required: true})} 
                />
                I have read and accept the Terms of Service
                </label>
                {errors?.checkbox?.type ==='required' && <p className="error-msg">Select is required</p>}
            
            <input type="submit" className="btn-submit d-block rounded" />
            </form>
            <div className="my-2 d-flex justify-content-center">
                <p className="text-center px-2">Already have account!  </p>
                <Link to="/login">Login</Link>
            </div>
        </div>
        </>
    )
}

export default Register;