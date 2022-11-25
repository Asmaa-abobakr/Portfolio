import './style.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import DetailsAccordion from '../../accordion';
import { setBtnState, addToCart } from "../../../redux/cartSlice";
import { BsStarFill } from "react-icons/bs";



const ProductDetails = () =>{
    // variables:
    let [product, setProduct] = useState(null);
    let params = useParams();
    const btnStateGlobal = useSelector(state => state.cartStore.btnState);
    const isloggedGlobal = useSelector(state => state.authStore.islogged);
    const dispatch = useDispatch();

    const getProductDetails = ()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>res.json())
        .then(json=>{setProduct(json)})
    }
    useEffect(()=>{
        getProductDetails();
    }, []);

    const addHandleFromDetails = (id, product)=>{
        if(isloggedGlobal === true){
            const stateObj = {
                id: id,
                state: true
            }
            dispatch(setBtnState(stateObj));
            dispatch(addToCart(product));
        }
        else{
            alert("Login or Register to add the product to the cart!!");
        }
    }

    // check if the data already exists or not:
    if(!product){
        return (
            <Spinner animation="border" variant="warning" className='spinnerStyle' />
            );
    }
    return (
        <>
         <div className='details-product-container container mx-auto pb-0'>
         <div className="row mb-2">
            <div className="col-6">
                {/* product-image */}
                <div className="product-img-container mb-4">
                    <img src={product.image} alt="product-img" />
                </div>
            </div>
            <div className="col-6 pt-5">
                {/* price, rating */}
                <p className="mb-1">{ product.rating.rate}  <BsStarFill className='social-icon'/></p>
                <p className="mb-1">Price: <span className="price">{product.price}$</span></p>
            </div>
        </div>
        <div className="row">
            <div className="col-11">
            <p className="product-title px-3"><Link to={`/product-details/${product.id}`}>{product.title}</Link></p>
            </div>
        </div>
            <DetailsAccordion name= "Category" content = {product.category} className="w-75"/>
            <DetailsAccordion name= "Description" content = {product.description}/>
            <div className="d-flex justify-content-between w-100 mt-2 mb-4 ">
                {
                    btnStateGlobal[product.id]?
                    <button onClick={()=>addHandleFromDetails(product.id, product)} 
                    className="inactive-btn py-2 px-4 border-0 rounded" 
                    disabled>Add to cart</button>
                    :  <button onClick={()=>addHandleFromDetails(product.id, product)} 
                    className="active-btn py-2 px-4 border-0 rounded" 
                    >Add to cart</button>
                }
                <button className="home-btn py-2 px-4 border-0 rounded"><Link to={`/shop`} className="text-decoration-none text-white">Go Home <FontAwesomeIcon icon={faArrowRight} className="px-3"/> </Link></button>
            </div>
        </div>
        </>
    )
}
 
export default ProductDetails;

// if(!product)
// product?.image in html


