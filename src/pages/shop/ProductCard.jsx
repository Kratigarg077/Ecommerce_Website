import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import QuickViewModal from "./QuickViewModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ p }) {
  const [quickView, setQuickView] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="card border-0 shadow-sm product-card position-relative overflow-hidden">

      {/* IMAGE CONTAINER */}
      <div
        className="position-relative overflow-hidden related-product-box"
        style={{ width: "270px", height: "300px", cursor: "pointer" }}
      >
        {/* PRODUCT IMAGE */}
        <img
          src={p.images[0]}
          alt={p.title}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
          onClick={() => navigate(`/product/${p.id}`)}
        />

        {/* DISCOUNT LABEL */}
        {p.discount && (
          <span
            className="position-absolute top-0 end-0 px-2 py-1"
            style={{ color: "#E63946", fontSize: "15px", fontWeight: "700" }}
          >
            -{p.discount}%
          </span>
        )}

        {/* HOVER CENTER ICONS */}
        <div
          className="position-absolute top-50 start-50 translate-middle d-flex gap-3 product-icons"
          style={{
            opacity: 0,
            transition: "0.3s",
          }}
        >
          {/* WISHLIST */}
          <button className="btn rounded-3 shadow-sm bg-white border-0 p-3">
            <FaHeart size={20} />
          </button>

          {/* QUICK VIEW */}
          <button
            className="btn rounded-3 shadow-sm bg-white border-0 p-3"
            onClick={(e) => {
              e.stopPropagation();
              setQuickView(p);
            }}
          >
            <FaEye size={20} />
          </button>
        </div>
            
        {/* ADD TO CART — STICKY BOTTOM BLACK BAR */}
        <div className="product-icons">
          <button
            className="position-absolute bottom-0 start-0 w-100 border-0 text-white d-flex align-items-center justify-content-center gap-2"
            style={{
              height: "30px",
              background: "#000",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <FaShoppingCart size={15} /> Add to cart
          </button>
        </div>
      </div>


      {/* CONTENT */}
      <div className="p-2" style={{ width: "270px" }}>
        <h6 className="fw-semibold">{p.title}</h6>

        {/* Price */}
        <div className="mb-2">
          {p.oldPrice && (
            <span className="text-muted text-decoration-line-through me-2">
              ₹{p.oldPrice}
            </span>
          )}
          <span className="fw-bold text-danger">₹{p.price}</span>
        </div>

        {/* Colors */}
        {p.colors && p.colors.length > 0 && (
            <div className="d-flex align-items-center mb-2 gap-2">
                <span className="fw-semibold me-3">Color:</span>
                <div className="d-flex gap-2">
                {p.colors.map((color, index) => (
                    <span
                    key={index}
                    className={`rounded-circle border border-2`}
                    style={{
                        width: 20,
                        height: 20,
                        background: color,
                        borderColor: color,
                    }}
                    ></span>
                ))}
                </div>
            </div>
        )}

        {/* Sizes */}
        {p.sizes && p.sizes.length > 0 && (
            <div className="d-flex align-items-center gap-2 mb-2">
                {p.sizes.map((s, idx) => (
                <span
                    key={idx}
                    className="border border-secondary rounded px-2 py-1 small"
                >
                    {s}
                </span>
                ))}
            </div>
        )}

        {/* Description */}
        <p className="text-muted small">{p.description}</p>
      </div>

      {/* QUICK VIEW POPUP */}
      {quickView && (
        <QuickViewModal product={quickView} close={() => setQuickView(null)} />
      )}
    </div>
  );
}
