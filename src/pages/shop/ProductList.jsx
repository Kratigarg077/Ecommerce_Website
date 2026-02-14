import { useState } from "react";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import QuickViewModal from "./QuickViewModal";
import { useNavigate } from "react-router-dom";

export default function ProductList({ products }) {
  const [quickView, setQuickView] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex flex-column gap-4">

        {products.map((p) => (
          <div
            key={p.id}
            className="row g-3 p-3 border rounded shadow-sm"
            style={{ transition: "0.2s" }}
          >

            {/* LEFT — IMAGE */}
            <div className="col-md-4 position-relative">
              <img
                src={p.images[0]}
                className="img-fluid rounded"
                alt={p.title}
                onClick={() => navigate(`/product/${p.id}`)}
              />
            </div>

            {/* RIGHT — CONTENT */}
            <div className="col-md-8">
              <h5 className="fw-semibold">{p.title}</h5>

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
              <p className="text-muted small">
                {p.description}
              </p>

              {/* ICON BUTTONS */}
              <div className="d-flex gap-3 mt-3 product-icons">
                <button className="btn btn-light rounded shadow-sm" 
                onClick={() => setQuickView(p)}
                style={{
                  top: "50%",
                  left: "50%",
                  borderRadius: "8px",
                  padding: "12px 25px",
                  opacity: 0.9
                }}>
                  <FaEye size={18} />
                </button>

                <button className="btn btn-light rounded shadow-sm" 
                style={{
                  top: "50%",
                  left: "50%",
                  borderRadius: "8px",
                  padding: "12px 25px",
                  opacity: 0.9
                }}>
                  <FaShoppingCart size={18} />
                </button>
                <button className="btn btn-light rounded shadow-sm" style={{
                  top: "50%",
                  left: "50%",
                  borderRadius: "8px",
                  padding: "12px 25px",
                  opacity: 0.9
                }}>
                  <FaHeart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* QUICK VIEW POPUP */}
      {quickView && (
        <QuickViewModal product={quickView} close={() => setQuickView(null)} />
      )}
    </>
  );
}