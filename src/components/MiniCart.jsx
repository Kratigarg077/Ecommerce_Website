import React from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { Link } from "react-router-dom";

export default function MiniCart({ isOpen, onClose, cartItems = [] }) {
  return (
    <div className={`sidebar-cart-active ${isOpen ? "active" : ""}`}>
      <div className="sidebar-cart-all">

        {/* CLOSE BUTTON */}
        <button className="cart-close" onClick={onClose}>
          <FaTimes size={20} />
        </button>

        <div className="cart-content">
          <h3>Shopping Cart</h3>

          <ul>
            {cartItems.length === 0 ? (
              <li className="text-center py-4 text-muted">Your cart is empty.</li>
            ) : (
              cartItems.map((item, index) => (
                <li key={index}>
                  <div className="cart-img">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="cart-title">
                    <h4>{item.title}</h4>
                    <span>{item.qty} × ${item.price}</span>
                  </div>

                  <div className="cart-delete">
                    <button onClick={() => item.onRemove(item.id)}>×</button>
                  </div>
                </li>
              ))
            )}
          </ul>

          <div className="cart-total">
            <h4>
              Subtotal:{" "}
              <span>
                $
                {cartItems.reduce(
                  (sum, item) => sum + item.qty * item.price,
                  0
                )}
              </span>
            </h4>
          </div>

          <div className="cart-btn btn-hover">
            <Link className="theme-color" to="/cart">View Cart</Link>
          </div>

          <div className="checkout-btn btn-hover">
            <Link className="theme-color" to="/checkout">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
