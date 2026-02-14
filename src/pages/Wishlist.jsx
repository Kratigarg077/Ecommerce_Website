import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";

export default function Wishlist() {
  const navigate = useNavigate();

  // demo wishlist items (same pattern as cart)
  const [wishlist, setWishlist] = useState([
    products[5],
    products[3],
    products[6],
  ]);

  const removeItem = (id) => {
    setWishlist((list) => list.filter((p) => p.id !== id));
  };

  return (
    <div className="container py-5">
      <table className="table align-middle">
        <thead className="bg-light">
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Stock Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {wishlist.map((item) => (
            <tr key={item.id}>
              {/* PRODUCT */}
              <td>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    style={{ width: 80, height: 80, objectFit: "cover" }}
                  />

                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/product/${item.id}`)}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FF8C00")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
                  >
                    {item.title}
                  </span>
                </div>
              </td>

              {/* PRICE */}
              <td className="fw-semibold">
                ₹{item.price.toFixed(2)}
              </td>

              {/* STOCK */}
              <td className="text-success fw-semibold">
                {item.inStock ? "In Stock" : "Out of Stock"}
              </td>

              {/* ACTIONS */}
              <td className="text-end">
                <div className="d-flex justify-content-end gap-3 align-items-center">
                  <button
                    className="btn px-4 py-2 text-white"
                    style={{ background: "#FF8C00" }}
                  >
                    <FaShoppingCart className="me-2" />
                    Add to Cart
                  </button>

                  <button
                    className="btn btn-link text-danger"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {wishlist.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-5 text-muted">
                Your wishlist is empty
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
