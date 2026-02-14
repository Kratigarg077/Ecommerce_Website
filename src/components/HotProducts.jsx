import { useState } from "react";
import { products as productsData } from "../data/products";

import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { Link } from "react-router-dom";
import QuickViewModal from "../pages/shop/QuickViewModal";


export default function HotProducts() {
  const TABS = ["New Arrivals", "Best Sellers", "Sale Items"];
  const [active, setActive] = useState("New Arrivals");
  const [hovered, setHovered] = useState(null);
  const [quickView, setQuickView] = useState(null);

  // FILTER LOGIC
  const newArrivals = [...productsData].slice(-8);
  const bestSellers = [...productsData].sort((a, b) => b.rating - a.rating).slice(0, 8);
  const saleItems = productsData.filter((p) => p.discount).slice(0, 8);

  let list = newArrivals;
  if (active === "Best Sellers") list = bestSellers;
  if (active === "Sale Items") list = saleItems;

  return (
    <div className="container py-5">
      
      {/* SECTION HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Hot Products</h2>

        {/* TABS */}
        <div className="d-flex gap-4">
          {TABS.map((t) => (
            <span
              key={t}
              style={{
                cursor: "pointer",
                fontWeight: active === t ? "700" : "500",
                color: active === t ? "#FF8C00" : "#555",
                borderBottom: active === t ? "3px solid #FF8C00" : "none",
                paddingBottom: "6px",
              }}
              onClick={() => setActive(t)}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="row g-4">
        {list.map((p) => (
          <div key={p.id} className="col-lg-3 col-md-4 col-sm-6">
            
            <div
              className="border rounded overflow-hidden"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* IMAGE */}
              <div style={{ height: "300px", position: "relative" }}>
                <Link to={`/product/${p.id}`}>
                  <img
                    src={p.images[0]}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt={p.title}
                  />
                </Link>

                {p.discount && (
                  <span
                    className="position-absolute top-0 end-0 px-2 fw-bold"
                    style={{ color: "#FF3B30" }}
                  >
                    -{p.discount}%
                  </span>
                )}

                {/* HOVER ICONS */}
                {hovered === p.id && (
                  <div className="position-absolute top-50 start-50 translate-middle d-flex gap-3">
                    <button className="btn bg-white shadow-sm rounded p-2">
                      <FaHeart size={18} />
                    </button>

                    <button
                      className="btn bg-white shadow-sm rounded p-2"
                      onClick={() => setQuickView(p)}
                    >
                      <FaEye size={18} />
                    </button>
                  </div>
                )}
              </div>

              {/* ADD TO CART BAR */}
              <button
                className="w-100 border-0 text-white d-flex justify-content-center align-items-center gap-2 py-2"
                style={{
                  background: hovered === p.id ? "#FF8C00" : "#000",
                  transition: "0.3s",
                }}
              >
                <FaShoppingCart size={16} />
                Add to cart
              </button>

              {/* PRODUCT TEXT */}
              <div className="mt-2">
                <h6 className="fw-semibold">{p.title}</h6>

                <div className="d-flex align-items-center gap-2">
                  {p.oldPrice && (
                    <span className="text-muted text-decoration-line-through">
                      ₹{p.oldPrice}
                    </span>
                  )}

                  <span className="fw-bold" style={{ color: "#FF3B30" }}>
                    ₹{p.price}
                  </span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* QUICK VIEW MODAL */}
      {quickView && (
        <QuickViewModal product={quickView} close={() => setQuickView(null)} />
      )}
    </div>
  );
}
