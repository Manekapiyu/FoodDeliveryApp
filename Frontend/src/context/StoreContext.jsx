// StoreContext.jsx
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
 
  const url = "http://localhost:4000"; // Backend server URL

  const [cartItems, setCartItems] = useState({});
  const [foodList, setFoodList] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [error, setError] = useState(null);

  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId] || prev[itemId] <= 1) {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = foodList.find((product) => product._id === itemId);
        if (itemInfo) totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      setFoodList(response.data.data || []);
    } catch (err) {
      console.error("Failed to fetch food list:", err.response?.data || err.message || err);
      setError(err.response?.data?.message || err.message || "Failed to fetch food list");
    }
  };

 
  const loadCartData = async (userToken) => {
    try {
      const response = await axios.get(`${url}/api/cart/get`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
      setCartItems(response.data.data || {});
    } catch (err) {
      console.error("Failed to load cart data:", err.response?.data || err.message || err);
      setError(err.response?.data?.message || err.message || "Failed to load cart data");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      if (token) await loadCartData(token);
    };
    loadData();
  }, [token]);


  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    error,
  };

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export default StoreContextProvider;
