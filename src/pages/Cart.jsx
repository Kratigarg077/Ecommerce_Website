import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { products } from "../data/products";

export default function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([
    { ...products[5], qty: 1 },
    { ...products[3], qty: 1 },
    { ...products[6], qty: 1 }
  ]);

  const [shipping, setShipping] = useState(120);

  const updateQty = (id, change) => {
    setCart(items =>
      items.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + change) }
          : item
      )
    );
  };

  const removeItem = id => {
    setCart(items => items.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const total = subtotal + shipping;

  return (
    <div className="py-5">
      <div className="container">

        {/* CART TABLE */}
        <div className="table-responsive mb-4">
          <table className="table align-middle">
            <thead className="bg-light">
              <tr>
                <th>Product</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Subtotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className="d-flex align-items-center gap-3">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      style={{ width: 70, height: 70, objectFit: "cover" }}
                    />
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/product/${item.id}`)}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#FF8C00")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
                    >
                      {item.title}
                    </span>
                    </td>

                  <td className="text-center">₹{item.price.toFixed(2)}</td>

                  <td className="text-center">
                    <div className="d-inline-flex border">
                      <button
                        className="btn btn-sm"
                        onClick={() => updateQty(item.id, "dec")}
                      >−</button>
                      <span className="px-3 py-1">{item.qty}</span>
                      <button
                        className="btn btn-sm"
                        onClick={() => updateQty(item.id, "inc")}
                      >+</button>
                    </div>
                  </td>

                  <td className="text-center">
                    ₹{(item.price * item.qty).toFixed(2)}
                  </td>

                  <td className="text-center">
                    <button
                      className="btn text-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ACTION BUTTONS */}
        <div className="d-flex justify-content-between mb-5 product-icons">
          <button
            className="btn btn-light"
            onClick={() => navigate("/shop")}
            style={{fontWeight: "500" }} >
            Continue Shopping
          </button>

          <div className="d-flex gap-3 product-icons">
            <button className="btn btn-light" style={{fontWeight: "500" }}>Update Cart</button>
            <button className="btn btn-light" style={{fontWeight: "500" }} onClick={() => setCart([])}>
              Clear Cart
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="row">

          {/* SHIPPING */}
          <div className="col-lg-4 mb-4 product-icons">
            <h5>Calculate shipping</h5>
            <select className="form-select mb-3">
              <option disabled = 'disabled'>State</option>
              <option>Uttar Pradesh</option>
              <option>Delhi</option>
              <option>Haryana</option>
              <option>Karnataka</option>
              <option>Madhya Pradesh</option>
            </select>
            <input className="form-control mb-3" placeholder="Town / City" />
            <input className="form-control mb-3" placeholder="Postcode / ZIP" />
            <button className="btn" style={{ background: "#000", color:"white", fontWeight: "500" }} >Update</button>
          </div>

          {/* COUPON */}
          <div className="col-lg-4 mb-4 product-icons">
            <h5>Coupon Discount</h5>
            <p className="text-muted">Enter your coupon code if you have one.</p>
            <input className="form-control mb-3" placeholder="Coupon code" />
            <button className="btn" style={{ background: "#000", color:"white", fontWeight: "500" }} >Apply Coupon</button>
          </div>

          {/* TOTAL */}
          <div className="col-lg-4">
            <div className="border p-4 bg-white">
              {/* Subtotal */}
              <div className="d-flex justify-content-between fw-semibold mb-3">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <hr />

              {/* Shipping */}
              <div className="mb-3">
                <h6 className="fw-semibold mb-2">Shipping</h6>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="shipping"
                    checked={shipping === 0}
                    onChange={() => setShipping(0)}
                  />
                  <label className="form-check-label">Free shipping</label>
                </div>

                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="shipping"
                    checked={shipping === 100}
                    onChange={() => setShipping(100)}
                  />
                  <label className="form-check-label">Flat rate: ₹100.00</label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="shipping"
                    checked={shipping === 120}
                    onChange={() => setShipping(120)}
                  />
                  <label className="form-check-label">
                    Local pickup: ₹120.00
                  </label>
                </div>
              </div>
              
              <hr />

              {/* Total */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Total</h5>
                <h5 className="fw-bold mb-0" style={{ color: "#FF8C00" }}>
                  ₹{total.toFixed(2)}
                </h5>
              </div>

              {/* Checkout Button */}
              <div className="product-icons">
                <button
                  className="btn w-100 py-3 text-white fw-semibold"
                  style={{ background: "#000", color:"white", fontWeight: "500" }} 
                  onClick={() => {
                    navigate("/checkout");
                  }}
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
