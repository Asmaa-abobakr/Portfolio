import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import {setBtnState, removeFromCart } from "./../../../redux/cartSlice";
import emptyCart from './../../../assets/images/emptycart_.svg';
import empty from './../../../assets/images/empty_.svg';
import './cart.css'


const Cart = ()=>{
    const products = useSelector(state => state.cartStore.cartProducts);
    const productsPrice = useSelector(state => state.cartStore.totalPrice);
    const quantityGlobal = useSelector(state => state.cartStore.cartQuantity);
    const dispatch = useDispatch();
    const removeHandler = (id, product)=>{
        const stateObj = {
            id: id,
            state: false
        }
        dispatch(setBtnState(stateObj));
        dispatch(removeFromCart(product));
    }

    if(quantityGlobal > 0){
        return(
            <>
                <div className="w-75 mx-auto">
                  {products.map((product) =>{
                      return(
                          <div key={product.id} className="cart-product-container row d-flex justify-content-around align-items-center  mx-auto border-bottom py-3 mb-4">
                              <div className="text-center col-3">
                                  <img src={product.image} alt="product-img" />
                              </div>
                              <div className="col-5">
                                  <p className="w-75">{product.title}</p>
                              </div>
                              <div className="col-2">
                                  <p>Price: {product.price} $</p>
                              </div>
                              <div className="col-2">
                                  <button onClick={()=> removeHandler(product.id, product)} className="trash border-0 text-danger fs-2"><FontAwesomeIcon icon={faTrash}/></button>
                              </div>
                          </div>
                      )
                  })}
                  <div className="d-flex flex-row-reverse py-5">
                      <p className="total-price-text">Total Price: <span className="total-price">{ productsPrice}</span> $</p>
                  </div>
              </div>
            </>
          )
    }
    else{
        return(
            <>
             <div className="text-center">
                 <p className="text-white fs-1">Empty Cart</p>
                 {/* <img src={emptyCart} alt="Empty-cart" className="empty-cart-img" /> */}
                 <img src={empty} alt="Empty-cart" className="empty-cart-img"/>
             </div>
            </>
        )
    }

}

export default Cart;