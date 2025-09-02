import React, { useContext,  useState } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount,token,food_list,cartItems,url } = useContext(StoreContext);

  const[data,setData]= useState({
    firstName:"",
    lastName : "",
    email :"",
    street :"",
    city :"",
    state :"",
    zipcode :"",
    country :"",
    phone :""

  })

  const onChangeHandler = (event) =>{
    const name =  event.target.name;
    const value = event.target.value;
    setData(data =>({...data,[name]:value}))
     
  }

  const placeOrder = async (event) =>{

  }



  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input name='firstName' onChange= {onChangeHandler} value={data.firstName} type='text' placeholder='First name' />
          <input name='lastName' onChange= {onChangeHandler} value={data.lastName} type='text' placeholder='Last name' />
        </div>
        <input name='email' onChange= {onChangeHandler} value={data.email} type='text' placeholder='Email Address' />
        <input name='street' onChange= {onChangeHandler} value={data.street} type='text' placeholder='Street' />
        <div className='multi-fields'>
          <input name='city' onChange= {onChangeHandler} value={data.city} type='text' placeholder='City' />
          <input name='state' onChange= {onChangeHandler} value={data.state} type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input name='zipcode' onChange= {onChangeHandler} value={data.zipcode} type='text' placeholder='Zip code' />
          <input name='country' onChange= {onChangeHandler} value={data.country} type='text' placeholder='Country' />
        </div>
        <input name='phone' onChange= {onChangeHandler} value={data.phone} type='text' placeholder='Phone' />
      </div>
      <div className='place-order-right'>
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
              <p>Rs 300</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>Rs {getTotalCartAmount() + 300}</b>
            </div>
          </div>
        </div>
        <button type = "submit">PROCEED TO PAYMENT</button>
      </div>
    </form>
  );
};

export default PlaceOrder;