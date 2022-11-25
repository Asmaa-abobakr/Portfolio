import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { BsStarFill } from "react-icons/bs";
import Spinner from 'react-bootstrap/Spinner';
import { setBtnState, addToCart } from "../../../redux/cartSlice";
import './style.css'

const Shop = () =>{
    let [products, setProducts] = useState(null);
    const btnStateGlobal = useSelector(state => state.cartStore.btnState);
    const isloggedGlobal = useSelector(state => state.authStore.islogged);
    const dispatch = useDispatch();

    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }

    useEffect(()=>{
        getProducts();
    }, []);   

    const addHandle = (id, product)=>{
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

    if(!products){
        return (
            <Spinner animation="border" variant="warning"  className="spinnerStyle"/>
            );
    }

    return (
        <>
        <div className="row products-container mx-auto">
            {products.map((product, i) =>{
                // console.log(product);
                    return (
                        <div key={product.id}  className="product-col col-lg-4 mb-5">
                            <div className="product-container mx-auto p-2">
                                <div className="row mb-2">
                                    <div className="col-6">
                                        {/* product-image */}
                                        <div className="product-img-container mx-auto mb-4">
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
                                <div className="row px-3 mb-3">
                                    <div className="col-6">
                                        {
                                            btnStateGlobal[product.id]?
                                            <button onClick={()=>addHandle(product.id, product)} 
                                            className="inactive-btn py-2 px-4 border-0 rounded" 
                                            disabled>Add to cart</button>
                                            :  <button onClick={()=>addHandle(product.id, product)} 
                                            className="active-btn py-2 px-4 text-white border-0 rounded" 
                                            >Add to cart</button>
                                        }
                                    </div>
                                    <div className="col-6">
                                    <button className="details-btn py-2 px-4 border-0 rounded">
                                        <Link to={`/product-details/${product.id}`} className="text-decoration-none text-white">More Details</Link>
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
        </>
    );
}

export default Shop;

