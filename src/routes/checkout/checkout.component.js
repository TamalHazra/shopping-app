import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  //const incCartHandler=(cartItem)=>addItemToCart(cartItem)
  return (
    <div className="checkout-container">
      <div className="chackout-header">
        <div className="header-section">
          <span>Product</span>
        </div>
        <div className="header-section">
          <span>Description</span>
        </div>
        <div className="header-section">
          <span>Quantity</span>
        </div>
        <div className="header-section">
          <span>Price</span>
        </div>
        <div className="header-section">
          <span>Remove</span>
        </div>
      </div>
      <h1>This is the CHECKOUT page</h1>
      <div></div>
      {cartItems.map(cartItem => 
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    )}
      <span className="total">Total:&#8377;{cartTotal}</span>;
    </div>
  );
};
export default Checkout;
