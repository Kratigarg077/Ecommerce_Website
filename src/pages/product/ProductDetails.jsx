import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import QuantityBox from "./QuantityBox";

import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaExchangeAlt } from "@react-icons/all-files/fa/FaExchangeAlt";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [previewImage, setPreviewImage] = useState(product.images[0]);

  return (
    <div className="container py-5">

      {/* --------- PRODUCT TOP SECTION --------- */}
      <div className="row g-4">
        
        {/* LEFT IMAGES */}
        <div className="col-md-6 d-flex gap-3">

          {/* THUMBNAILS */}
          <div className="d-flex flex-column gap-2">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setPreviewImage(img)}
                className="border"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "6px"
                }}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="flex-grow-1">
            <img
              src={previewImage}
              className="w-100"
              style={{
                height: "500px",
                objectFit: "cover",
                borderRadius: "6px"
              }}
              alt={product.title}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-6">
          <h3>{product.title}</h3>

          {/* PRICE */}
          <p className="mt-2">
            <span className="text-muted text-decoration-line-through me-2">
              ₹{product.oldPrice}
            </span>
            <span className="fw-bold" style={{ color: "#FF8C00" }}>
              ₹{product.price}
            </span>
          </p>

          {/* RATING */}
          <div className="d-flex align-items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                size={16}
                style={{ color: i < Math.round(product.rating) ? "#FF8C00" : "#ccc" }}
              />
            ))}
            <span className="text-muted">({product.reviews?.length} Customer Review)</span>
          </div>

          {/* COLOR OPTIONS */}
          {product.colors && (
            <div className="mt-3">
              <strong>Color:</strong>
              <div className="d-flex gap-2 mt-2">
                {product.colors.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "4px",
                      background: c,
                      cursor: "pointer"
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* SIZE OPTIONS */}
          {product.sizes && (
            <div className="mt-3">
              <strong>Size:</strong>
              <div className="d-flex gap-2 mt-2">
                {product.sizes.map((s, i) => (
                  <span
                    key={i}
                    className="border px-3 py-1"
                    style={{ cursor: "pointer", borderRadius: "4px" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* QUANTITY + ADD TO CART */}
          <div className="d-flex align-items-center gap-3 mt-4 hover-icons">
            <QuantityBox />

            <button
              className="btn text-white px-4 py-2"
              style={{ background: "#FF8C00", fontWeight: "600" }}
            >
              Add to Cart
            </button>

            <button className="btn btn-light rounded shadow-sm">
              <FaHeart size={18} />
            </button>

            <button className="btn btn-light rounded shadow-sm">
              <FaExchangeAlt size={18} />
            </button>
          </div>

          {/* SKU, Category, Tags */}
          <div className="mt-4">
            <p className="mb-1"><strong>SKU:</strong> {product.sku}</p>
            <p className="mb-1"><strong>Category:</strong> {product.category}</p>
            <p className="mb-1"><strong>Tags:</strong> {product.tags?.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* --------- PRODUCT TABS --------- */}
      <ProductTabs product={product} />

      {/* --------- RELATED PRODUCTS --------- */}
      <RelatedProducts category={product.category} currentId={product.id} />
    </div>
  );
}
