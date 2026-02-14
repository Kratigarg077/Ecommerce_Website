import { useEffect, useState } from "react";
import { products } from "../data/products";
import paymentIcon from '../assets/images/icon-img/payment.png';

export default function Checkout() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [shipDifferent, setShipDifferent] = useState(false);

  const [showLoginSection, setShowLoginSection] = useState(true);

  // demo order items
  const orderItems = [
    { ...products[5], qty: 1 },
    { ...products[3], qty: 1 }
  ];

  const orderSubtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const orderTotal = orderSubtotal; // shipping handled later


  useEffect(() => {
    const loggedUser = sessionStorage.getItem("loggedUser");

    // If user is logged in, hide login section
    if (loggedUser) {
      setShowLoginSection(false);
    } else {
      setShowLoginSection(true);
    }
  }, []);

  return (
    <div className="checkout-main-area pb-100 pt-100 container">

      {/* Login Toggle */}
      <div className="customer-zone mb-4">
        {showLoginSection && (
          <p className="cart-page-title">
            Returning customer?{" "}
            <button
              className="btn btn-link p-0"
              onClick={() => setShowLogin(!showLogin)}
            >
              Click here to login
            </button>
          </p>
        )}

        {showLogin && (
          <div className="border p-3">
            <p>If you have shopped with us before, login below.</p>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Username or Email *</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Password *</label>
                  <input className="form-control" type="password" />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <button className="btn btn-color">Login</button>

                <div>
                  <input type="checkbox" id="remember" />
                  <label className="ms-1" htmlFor="remember">
                    Remember me
                  </label>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Coupon Toggle */}
      <div className="customer-zone mb-4">
        <p className="cart-page-title">
          Have a coupon?{" "}
          <button
            className="btn btn-link p-0"
            onClick={() => setShowCoupon(!showCoupon)}
          >
            Click here to enter your code
          </button>
        </p>

        {showCoupon && (
          <div className="border p-3">
            <form>
              <input className="form-control mb-2" placeholder="Coupon code" />
              <button className="btn btn-color">Apply Coupon</button>
            </form>
          </div>
        )}
      </div>

      <div className="row pt-3">
        {/* Billing Form */}
        <div className="col-lg-7">
          <div className="billing-info-wrap">
            <h3>Billing Details</h3>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>First Name *</label>
                <input className="form-control" type="text" />
              </div>

              <div className="col-md-6 mb-3">
                <label>Last Name *</label>
                <input className="form-control" type="text" />
              </div>

              <div className="col-md-12 mb-3">
                <label>Company Name *</label>
                <input className="form-control" type="text" />
              </div>

              <div className="col-md-12 mb-3">
                <label>Country *</label>
                <select className="form-select">
                  <option>Select a country</option>
                  <option>India</option>
                  <option>Bahamas</option>
                  <option>Bahrain</option>
                  <option>Bangladesh</option>
                  <option>Barbados</option>
                </select>
              </div>

              <div className="col-md-12 mb-3">
                <label>Street Address *</label>
                <input className="form-control mb-2" placeholder="House number and street name" />
                <input className="form-control" placeholder="Apartment, suite, etc." />
              </div>

              <div className="col-md-12 mb-3">
                <label>Town / City *</label>
                <input className="form-control" type="text" />
              </div>

              <div className="col-md-12 mb-3">
                <label>State / County *</label>
                <input className="form-control" type="text" />
              </div>

              <div className="col-md-12 mb-3">
                <label>Postcode / ZIP *</label>
                <input className="form-control" type="text" />
              </div>

              <div className="col-md-12 mb-3">
                <label>Phone *</label>
                <input className="form-control" type="text" />
              </div>

              <div className="col-md-12 mb-3">
                <label>Email Address *</label>
                <input className="form-control" type="text" />
              </div>
            </div>
            
            {/* Ship to different */}
            <div className="mb-3">
              <input
                type="checkbox"
                id="shipDiff"
                checked={shipDifferent}
                onChange={() => setShipDifferent(!shipDifferent)}
              />
              <label htmlFor="shipDiff" className="ms-2">
                Ship to a different address?
              </label>
            </div>

            {shipDifferent && (
              <div className="border p-3">
                {/* duplicate of address form */}
                <p>Shipping address form goes here…</p>
              </div>
            )}

            <div>
              <label>Order Notes</label>
              <textarea
                className="form-control"
                placeholder="Notes about your order."
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>
       {/* Order Summary */}
      <div className="col-lg-5">
        <div className="your-order-area">
          <h3>Your Order</h3>

          <div className="gray-bg-4 p-3 border rounded">
            <ul className="list-group mb-3">

              {/* PRODUCTS */}
              {orderItems.map(item => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {item.title} × {item.qty}
                  </span>
                  <strong>₹{item.price * item.qty}</strong>
                </li>
              ))}

              {/* SUBTOTAL */}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Subtotal</strong>
                <strong>₹{orderSubtotal}</strong>
              </li>

              {/* SHIPPING INFO */}
              <li className="list-group-item text-muted">
                Shipping — Enter your full address
              </li>

              {/* TOTAL */}
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong style={{ color: "#FF8C00" }}>
                  ₹{orderTotal}
                </strong>
              </li>
            </ul>

            {/* PAYMENT METHODS */}
            <div>
              <div className="form-check mb-2">
                <input
                  type="radio"
                  className="form-check-input"
                  name="payment"
                  defaultChecked
                />
                <label className="form-check-label">
                  Direct Bank Transfer
                </label>
              </div>

              <div className="form-check mb-2">
                <input type="radio" className="form-check-input" name="payment" />
                <label className="form-check-label">Check Payments</label>
              </div>

              <div className="form-check mb-2">
                <input type="radio" className="form-check-input" name="payment" />
                <label className="form-check-label">Cash on Delivery</label>
              </div>

              <div className="form-check mb-2">
                <input type="radio" className="form-check-input" name="payment" />
                <label className="form-check-label d-flex align-items-center gap-2">
                  PayPal
                  <img
                    src={paymentIcon}
                    alt="payment"
                    height="18"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* PLACE ORDER */}
          <div className="product-icons">
            <button
              className="btn mt-3 w-100"
              style={{
                background: "#000",
                color: "#fff",
                fontWeight: 500
              }}
            >
              Place Order
            </button>
            </div>
        </div>
      </div>

      </div>
    </div>
  );
}
