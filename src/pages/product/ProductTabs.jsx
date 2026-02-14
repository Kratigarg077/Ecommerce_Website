import React, { useState } from "react";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

export default function ProductTabs({ product }) {
  const [active, setActive] = useState("description");

  return (
    <div className="mt-5">

      {/* TAB BUTTONS */}
      <ul className="nav nav-tabs">
        {["description", "information", "reviews"].map((tab) => (
          <li key={tab} className="nav-item">
            <button
                className={`nav-link text-capitalize ${
                    active === tab ? "active" : ""
                }`}
                onClick={() => setActive(tab)}
                style={{
                cursor: "pointer",
                backgroundColor: active === tab ? "#FF8C00" : "transparent",
                color: active === tab ? "#fff" : "#000",
                borderRadius: "4px",
                fontWeight: 500
                }}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* TAB CONTENT */}
      <div className="border p-4">
        
        {/* DESCRIPTION */}
        {active === "description" && <p>{product.description}</p>}

        {/* INFORMATION TABLE */}
        {active === "information" && (
          <table className="table w-50">
            <tbody>
              {Object.entries(product.information).map(([key, val]) => (
                <tr key={key}>
                  <th className="text-capitalize">{key}</th>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* REVIEWS */}
        {active === "reviews" && (
          <div>
            {product.reviews?.map((r) => (
              <div key={r.id} className="border-bottom pb-3 mb-3">
                <strong>{r.name}</strong>
                <div>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <FaStar key={i} size={14} style={{ color: "#FF8C00" }} />
                  ))}
                </div>
                <p className="mb-0">{r.comment}</p>
                <small className="text-muted">{r.date}</small>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
