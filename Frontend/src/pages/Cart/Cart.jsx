import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <h2 className='cart-heading'>
        {getTotalCartAmount() === 0 ? "🛒 Your Cart is Empty" : "🛒 Your Shopping Cart"}
      </h2>

      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      {food_list?.map((item) => (
  cartItems[item._id] > 0 ? (
    <div key={item._id}>
      <div className='cart-items-title cart-items-item'>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>Rs {item.price}</p>
        <p>{cartItems[item._id]}</p>
        <p>Rs {item.price * cartItems[item._id]}</p>
        <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
      </div>
      <hr />
    </div>
  ) : null
))}

      </div>

      <div className='cart-button'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount() === 0 ? 0 : 300}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>Rs {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 300}</b>
            </div>
          </div>
        </div>
        <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>

      <div className='cart-promocode'>
        <div>
          <p>If you have a promo code, enter it here...</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
