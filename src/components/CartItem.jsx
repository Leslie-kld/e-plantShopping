import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>Your Shopping Cart</h1>

        <p>Your cart is currently empty.</p>

        <br />

        <Link to="/plants">
          <button className="continue-button">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.map((item) => {
        const itemTotal =
          item.price * item.quantity;

        return (
          <div
            className="cart-item"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
            />

            <div className="cart-item-info">
              <h3>{item.name}</h3>

              <p>
                Unit Price: $
                {item.price.toFixed(2)}
              </p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    handleDecrease(item)
                  }
                >
                  -
                </button>

                <span>
                  Quantity: {item.quantity}
                </span>

                <button
                  onClick={() =>
                    handleIncrease(item)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <strong>
                Total: $
                {itemTotal.toFixed(2)}
              </strong>
            </div>

            <button
              className="delete-button"
              onClick={() =>
                dispatch(removeItem(item.id))
              }
            >
              Delete
            </button>
          </div>
        );
      })}

      <div className="cart-summary">
        <div className="cart-total">
          Total Amount: $
          {totalAmount.toFixed(2)}
        </div>

        <div className="cart-buttons">
          <Link to="/plants">
            <button className="continue-button">
              Continue Shopping
            </button>
          </Link>

          <button
            className="checkout-button"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;