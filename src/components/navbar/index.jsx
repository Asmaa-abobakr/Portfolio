import './nav.css'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import {setIsLogged} from './../../redux/authSlice';
import {resetQuantity} from './../../redux/cartSlice';


const Navbar = () =>{
    const quantityGlobal = useSelector(state => state.cartStore.cartQuantity);
    const islogged = useSelector(state => state.authStore.islogged);
    console.log("nav-logged: ", islogged);
    const params = useLocation();
    const path = params.pathname.split('/')[1];
    console.log(path);
    const dispatch = useDispatch();

    const handleLogout = ()=>{
        dispatch(setIsLogged(false));
        dispatch(resetQuantity());
        console.log("logout");
    }
    const handlecart =()=>{
        alert("You have to login or register to access this page!!");
    }

    // const handleClick = (e)=>{
    //     e.target.classList.add("active");
    //     console.log(e.target);
    // }

   if (path === 'counter'){
        return (
            <>
            <div className= 'nav-container d-flex justify-content-around align-items-center pt-2 pb-1 mb-5'>
                <h1 className='nav-title'>Counter</h1>
                <ul className='list-container d-flex justify-content-between align-items-center my-0'>
                    <li className='px-3 py-2 mx-3  rounded'><Link to="/">Main page</Link></li>
                    <li className='px-3 py-2 mx-3  rounded'><Link to="/projects">My Projects</Link></li>
                </ul>
            </div>
            </>
        )
    }
    else if (path === 'shop' || path === 'product-details' || path === 'cart' || path==='register' || path==='login'){
        return (
            <>
            <div className= 'nav-container d-flex justify-content-around align-items-center pt-2 pb-1 mb-5'>
                <h1  className='nav-title'>E-Commerce</h1>
                <ul className='list-container d-flex justify-content-between align-items-center my-0'>
                    <li className='px-1'><Link to="/shop"><FontAwesomeIcon icon={faHome} /> </Link></li>
                    {
                        islogged?
                        <>
                            <li className='px-1'><Link to="/cart"> <FontAwesomeIcon icon={faCartShopping} /> {quantityGlobal}</Link></li> 
                            <li className='px-1'><Link to="/shop" onClick={handleLogout}>Log out</Link></li>
                        </>
                        :<>
                            <li className='px-1'><Link to="/shop" onClick={handlecart}> <FontAwesomeIcon icon={faCartShopping} /> {quantityGlobal}</Link></li> 
                            <li className='px-1'><Link to="/register">Register</Link></li>
                            <li className='px-1'><Link to="/login">LogIn</Link></li>
                        </>
                    }
                </ul>
                <div>
                    <ul className='list-container d-flex justify-content-between align-items-center my-0'>
                        <li className='nav-btn  px-1 py-1 mx-2 rounded'><Link to="/">Main page</Link></li>
                        <li className='nav-btn  px-1 py-1 mx-2 rounded'><Link to="/projects">My Projects</Link></li>
                    </ul>
                    </div>
            </div>
            </>
        )
    }
    // else if(path==='register'){
    //     return (
    //         <>
    //         <div className= 'nav-container d-flex justify-content-around align-items-center pt-2 pb-1 mb-5'>
    //             <h1  className='nav-title'>E-Commerce</h1>
    //             <ul className='list-container d-flex justify-content-between align-items-center my-0'>
    //                 <li className='px-3'><Link to="/shop"><FontAwesomeIcon icon={faHome} /> </Link></li>
    //                 <li className='px-3'><Link to="/cart"> <FontAwesomeIcon icon={faCartShopping} /> {quantityGlobal}</Link></li> 
    //                 <li className='px-3'><Link to="/register">Register</Link></li>
    //                 <li className='nav-btn  px-3 py-2 mx-3 rounded'><Link to="/" className='text-white'>Main page</Link></li>
    //                 <li className='nav-btn  px-3 py-2 mx-3 rounded'><Link to="/projects" className='text-white'>My Projects</Link></li>
    //             </ul>
    //         </div>
    //         </>
    //     )
    // }
    // else if (path === 'login'){
    //     return (
    //         <>
    //         <div className= 'nav-container d-flex justify-content-around align-items-center pt-3 pb-1 mb-5'>
    //             <h1  className='nav-title'>E-Commerce</h1>
    //             <ul className='list-container d-flex justify-content-between align-items-center my-0'>
    //                 <li className='px-3'><Link to="/shop"><FontAwesomeIcon icon={faHome} /> </Link></li>
    //                 <li className='px-3'><Link to="/cart"> <FontAwesomeIcon icon={faCartShopping} /> {quantityGlobal}</Link></li> 
    //                 <li className='px-3'><Link to="/login">LogIn</Link></li>
    //                 <li className='nav-btn  px-3 py-2 mx-3 rounded'><Link to="/" className='text-white'>Main page</Link></li>
    //                 <li className='nav-btn  px-3 py-2 mx-3 rounded'><Link to="/projects" className='text-white'>My Projects</Link></li>
    //             </ul>
    //         </div>
    //         </>
    //     )
    // }
    else{
        return (
            <>
            <div className= 'nav-container d-flex justify-content-between px-5 align-items-center pt-3 pb-1 mb-5'>
                <h1 className='nav-title px-5'>Portfolio</h1>
                <ul className='list-container d-flex justify-content-between align-items-center my-0 px-5'>
                    <li className='px-3'><Link to="/">Home</Link></li>
                    <li className='px-3'><Link to="/about">About</Link></li>
                    <li className='px-3'><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
            </>
        )
    }
}

export default Navbar;