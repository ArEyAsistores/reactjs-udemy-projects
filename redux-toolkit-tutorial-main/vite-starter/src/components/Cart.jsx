import React from 'react'
import { ChevronDown, ChevronUp } from '../icons';

const Cart = (item) => {
    const { id, title, price, img, amount, handleRemoveItem, handleIncreaseItem, handleDecreaseItem } = item;
  return (
   <article className='cart-item'>
    <img src={img} alt={title} />
    <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button type='button' className='remove-btn' onClick={() => handleRemoveItem(id)}>remove</button>
    </div>
    <div>
        <button type='button' className='amount-btn' onClick={() => handleIncreaseItem(id)}><ChevronUp/></button>
        <p className='amount'>{amount}</p>
        <button type='button' className='amount-btn' onClick={() => handleDecreaseItem(id)}><ChevronDown/></button>
    </div>
   </article>
  )
}

export default Cart