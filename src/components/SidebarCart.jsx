import { useState } from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

export default function SidebarCart({ open, close }) {
  const navigate = useNavigate();

  // demo cart (same logic as cart page)
  const [cart, setCart] = useState([
    { ...products[5], qty: 1 },
    { ...products[3], qty: 1 }
  ]);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div
      className={`position-fixed top-0 end-0 h-100 bg-white shadow ₹{
        open ? "translate-none" : "translate-end"
      }`}
      style={{
        width: "360px",
        zIndex: 1050,
        transition: "0.3s",
        transform: open ? "translateX(0)" : "translateX(100%)"
      }}
    >
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
        <h4 className="mb-0 fw-semibold">Shopping Cart</h4>
        <button className="btn p-0 border-0" onClick={close}>
          <FaTimes size={22} />
        </button>
      </div>

      {/* CART ITEMS */}
      <div className="p-4" style={{ overflowY: "auto", height: "calc(100% - 260px)" }}>
        {cart.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center gap-3 mb-4"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              style={{ width: 70, height: 70, objectFit: "cover" }}
            />

            <div className="flex-grow-1">
              <h6 className="mb-1">{item.title}</h6>
              <span className="text-muted">
                {item.qty} × ₹{item.price.toFixed(2)}
              </span>
            </div>

            {/* REMOVE */}
            <button
              className="btn p-0 border-0 text-danger"
              onClick={() => removeItem(item.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="p-4 border-top">
        <div className="d-flex justify-content-between mb-3 fw-semibold">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="product-icons">
            <button
            className="w-100 btn mb-2 text-white"
            style={{ background: "#000" }}
            onClick={() => {
                close();
                navigate("/cart");
            }}
            >
            View Cart
            </button>

            <button
            className="w-100 btn text-white"
            style={{ background: "#000" }}
            onClick={() => {
                close();
                navigate("/checkout");
            }}
            >
            Checkout
            </button>
        </div>
      </div>
    </div>
  );
}
