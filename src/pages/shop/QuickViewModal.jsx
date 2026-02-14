import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { useState } from "react";

export default function QuickViewModal({ product, close }) {
  const [qty, setQty] = useState(1);

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
      style={{ zIndex: 9999 }}
    >
      <div
        className="bg-white p-4 rounded shadow-lg"
        style={{ width: "92%", maxWidth: "1100px", position: "relative" }}
      >

        {/* CLOSE BUTTON */}
        <button
          className="btn btn-dark position-absolute"
          style={{ top: 20, right: 20 ,padding: "10px 20px",}}
          onClick={close}
        >
          <FaTimes size={20} />
        </button>

        <div className="row g-4">
          
            {/* LEFT IMAGE */}
            <div
            className="col-md-6"
            style={{
                width: "270px",
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                backgroundColor: "#f8f9fa", // optional light background for empty spaces
            }}
            >
            <img
                src={product.images[0]}
                alt={product.title}
                className="img-fluid rounded"
                style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain", // shows the whole image
                }}
            />
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-md-6">
                <h2 className="fw-bold">{product.title}</h2>

                {/* Price */}
                <div className="mb-3">
                {product.oldPrice && (
                    <span className="text-muted text-decoration-line-through me-2">
                    ₹{product.oldPrice}
                    </span>
                )}
                <span className="fw-bold text-danger">₹{product.price}</span>
            </div>

            {/* Stars */}
            <div className="text-warning mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                    {i < Math.round(product.rating) ? "★" : "☆"}
                    </span>
                ))}
                <span className="text-muted small ms-2">
                    ({product.reviews?.length} Customer Review{product.reviews?.length > 1 ? "s" : ""})
                </span>
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
                <div className="d-flex align-items-center mb-3">
                    <span className="fw-semibold me-3">Color:</span>
                    <div className="d-flex gap-2">
                    {product.colors.map((color, index) => (
                        <span
                        key={index}
                        className={`rounded-circle border border-2`}
                        style={{
                            width: 22,
                            height: 22,
                            background: color,
                            borderColor: color,
                        }}
                        ></span>
                    ))}
                    </div>
                </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
                <div className="d-flex align-items-center mb-3">
                    <span className="fw-semibold me-3">Size:</span>
                    <div className="d-flex gap-2">
                    {product.sizes.map((size, index) => (
                        <span
                        key={index}
                        className="border border-secondary rounded px-2 py-1"
                        >
                        {size}
                        </span>
                    ))}
                    </div>
                </div>
            )}

            {/* QTY + ADD CART */}
            <div className="d-flex align-items-center mt-4 gap-3 product-icons">

              {/* QTY */}
              <div className="border rounded d-flex align-items-center">
                <button
                  className="btn"
                  onClick={() => qty > 1 && setQty(qty - 1)}
                >
                  –
                </button>
                <span className="px-3">{qty}</span>
                <button className="btn" onClick={() => setQty(qty + 1)}>
                  +
                </button>
              </div>

              {/* ADD CART BUTTON */}
              <button
                className="btn text-white px-4 py-2"
                style={{ background: "#FF8C00" }}
              >
                <FaShoppingCart className="me-2" />
                Add to cart
              </button>

              {/* Wishlist */}
              <button className="btn btn-light rounded">
                <FaHeart size={19} />
              </button>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-4 text-muted">
             {product.description}
            </p>

             {/* Customer Reviews */}
            <div className="mt-4">
                <h5 className="mb-3">Customer Reviews</h5>

                {product.reviews?.length > 0 ? (
                    product.reviews.map((review) => (
                    <div key={review.id} className="border rounded p-3 mb-3 bg-light">
                        
                        {/* Reviewer Name + Date */}
                        <div className="d-flex justify-content-between">
                        <strong>{review.name}</strong>
                        <small className="text-muted">{review.date}</small>
                        </div>

                        {/* Star Rating */}
                        <div className="text-warning my-1">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                            {i < review.rating ? "★" : "☆"}
                            </span>
                        ))}
                        </div>

                        {/* Comment */}
                        <p className="mb-0">{review.comment}</p>
                    </div>
                    ))
                ) : (
                    <p className="text-muted">No reviews yet.</p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
