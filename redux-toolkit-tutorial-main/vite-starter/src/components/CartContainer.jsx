import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem, increaseItem, decreaseItem, totalItem } from '../features/cart/cartSlice';
import Cart from './Cart';
import Modal from './modal';

 const CartContainer = ({handleClearCart}) => {


    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeItem({id}))
    }
    const handleIncreaseItem = (id) => {
        dispatch(increaseItem({id}))
    }
    const handleDecreaseItem = (id) => {
        dispatch(decreaseItem({id}))
    }
  
    const { cartItems, amount, total} = useSelector((state) => state.cart)
    
    useEffect(() => {
        dispatch(totalItem())
    },[cartItems]);
    
 
   if(amount < 1){
    return(
        <section className='cart'>
            <header>
                <h2>Your Bag</h2>
                <h4 className='empty-cart'> is currently empty</h4>
            </header>
        </section>
    );
   }
   return(
    <section className='cart'>
        <header>
            <h2> Your bag </h2>
        </header>
        <div>
            {/* Cart Item */}
            {
                cartItems.map((item) => {
                   return(
                    <Cart key={item.id} {...item} handleRemoveItem = { handleRemoveItem } handleIncreaseItem = {handleIncreaseItem} handleDecreaseItem = {handleDecreaseItem}/>
                   )
                })
            }
        </div>
        <footer>
        <hr/>
          <div className='cart-total'>
            <h4>Total: <span>${total.toFixed(2)}</span></h4>
          </div>
          <button type='button' className='btn clear-btn' onClick={handleClearCart}> clear cart </button>
        </footer>
    </section>
   )

}
export default CartContainer
