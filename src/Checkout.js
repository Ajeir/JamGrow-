import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Product from "./Product"

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src={
            "https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png"
          }
          alt=""
        />
        
        <div>
          <h2 className="checkout_title">Your shopping Basket</h2>
          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
        </div>
      </div>

      <div className="checkout_right">
          <Subtotal />
      </div>

    </div>
  );
}

export default Checkout;
