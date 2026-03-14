import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'

const CartItem = (props) => {

    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className='cart-item'>
        <div className="cart-items-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_product.map((e) => {
            if (cartItems[e.id]>0){
                return(
                <div>
                    <div className="cart-items-format cart-items-format-main">
                    <img src={e.image} alt="" className='cart-item-product-icon'/>
                    <p>{e.name}</p>
                    <p>₦{e.new_price}</p>
                    <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                    <p>₦{e.new_price*(cartItems[e.id])}</p>
                    <img className='cart-remove-icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>)
            } return null;
       })}
       <div className="cart-items-bottom">
        <div className="cart-items-total">
            <h1>Total</h1>
            <div>
                <div className="cart-items-total-items">
                    <p>Subtotal</p>
                    <p>₦{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-items-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart-items-total-items">
                    <h3>Total</h3>
                    <h3>₦{getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promo-code">
            <p>If you have a promo code, Enter it here: </p>
            <div className="cart-item-promo-box">
                <input type="text" placeholder='PROMOCODE'/>
                <button>Submit</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartItem;