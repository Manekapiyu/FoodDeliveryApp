import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems} = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login before placing an order.");
      return;
    }

    //  Prepare order items safely
    const orderItems = Array.isArray(food_list)
      ? food_list
          .filter((item) => (cartItems?.[item._id] ?? 0) > 0)
          .map((item) => ({
            itemId: item._id,
            quantity: cartItems?.[item._id] ?? 0,
            price: item.price,
          }))
      : [];

    // Final order payload
    const orderData = {
      items: orderItems,
      address: data,
      amount: (getTotalCartAmount() ?? 0) + 300, // Delivery fee included
    };

    try {
      const response = await axios.post(
  "http://localhost:4000/api/order/place",
  orderData, 
  { headers: { Authorization: `Bearer ${token}` } }
);

      if (response.data.success) {
        // Redirect to payment session
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert(response.data.message || "Error placing order");
      }
    } catch (error) {
    
      if (error.response?.status === 401) {
        alert("Unauthorized. Please login again.");
      } else {
        alert("Failed to place order. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name="firstName" value={data.firstName} onChange={onChangeHandler} type="text" placeholder="First name" />
          <input required name="lastName" value={data.lastName} onChange={onChangeHandler} type="text" placeholder="Last name" />
        </div>
        <input required name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder="Email Address" />
        <input required name="street" value={data.street} onChange={onChangeHandler} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required name="city" value={data.city} onChange={onChangeHandler} type="text" placeholder="City" />
          <input required name="state" value={data.state} onChange={onChangeHandler} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required name="zipcode" value={data.zipcode} onChange={onChangeHandler} type="text" placeholder="Zip code" />
          <input required name="country" value={data.country} onChange={onChangeHandler} type="text" placeholder="Country" />
        </div>
        <input required name="phone" value={data.phone} onChange={onChangeHandler} type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Rs {getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Rs 300</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>Rs {getTotalCartAmount() + 300}</b>
          </div>
        </div>
        <button type="submit">PROCEED TO PAYMENT</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
