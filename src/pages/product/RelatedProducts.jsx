import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import QuickViewModal from "../shop/QuickViewModal";
import { useState } from "react";

export default function RelatedProducts({ category, currentId }) {
  const related = products.filter(
    (p) => p.category === category && p.id !== currentId
  );
  const [quickView, setQuickView] = useState(null);

  return (
    <div className="mt-5">
      <h4 className="text-center mb-3">Related Products</h4>
      <div className="row g-4">
      {related.map((p) => (
        <div key={p.id} className="col-md-3">

          {/* PRODUCT CARD */}
          <div
            className="position-relative border rounded overflow-hidden related-card"
            style={{ cursor: "pointer" }}
          >
            {/* IMAGE WRAPPER */}
            <div
              className="position-relative"
              style={{ width: "100%", height: "300px" }}
            >
              {/* IMAGE (click → go to product details) */}
              <Link to={`/product/${p.id}`}>
                <img
                  src={p.images[0]}
                  className="w-100 h-100"
                  alt={p.title}
                  style={{ objectFit: "cover" }}
                />
              </Link>

              {/* DISCOUNT BADGE */}
              {p.discount && (
                <span
                  className="position-absolute top-0 end-0 px-2 py-1"
                  style={{ color: "#FF3B30", fontWeight: 700 }}
                >
                  -{p.discount}%
                </span>
              )}

              {/* HOVER ICONS */}
              <div className="hover-icons position-absolute top-50 start-50 translate-middle d-flex gap-3 opacity-0">
                {/* Wishlist */}
                <button className="btn bg-white shadow-sm rounded-3 p-3">
                  <FaHeart size={20} />
                </button>

                {/* QuickView */}
                <button
                  className="btn bg-white shadow-sm rounded-3 p-3"
                  onClick={() => setQuickView(p)}
                >
                  <FaEye size={20} />
                </button>
              </div>
            </div>

            {/* ADD TO CART — BOTTOM BLACK BAR */}
            <div className="hover-icons">
                <button
                className="w-100 border-0 text-white d-flex justify-content-center align-items-center gap-2 py-3"
                style={{
                    height: "35px",
                    background: "#000",
                    fontSize: "14px",
                    fontWeight: "500",
                }}
                >
                <FaShoppingCart size={20} />
                Add to cart
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
    </div>
  );
}
