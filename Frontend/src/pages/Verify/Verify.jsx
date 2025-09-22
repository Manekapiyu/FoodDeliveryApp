import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams(); // ✅ correct usage
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "api/order/verify", {
        success,
        orderId,
      });

      if (response.data.success) {
        // ✅ if payment verified, go to success page (cart, orders, etc.)
        navigate("/cart");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Verification error:", error);
      navigate("/");
    }
  };

  // ✅ run verify when component loads
  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
