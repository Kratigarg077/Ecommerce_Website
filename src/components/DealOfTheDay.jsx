import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";

import { products as productsData } from "../data/products";
import QuickViewModal from "../pages/shop/QuickViewModal";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DealOfTheDay() {
  // Pick top highest-discount products
  const dealProducts = [...productsData]
    .filter((p) => p.discount)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 6);

  const [hovered, setHovered] = useState(null);
  const [quickView, setQuickView] = useState(null);

  return (
    <div className="py-5">
      <div className="container">

        {/* HEADER ROW */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="fw-bold">DEAL OF THE DAY</h2>

          <div
            className="px-4 py-2 rounded-pill text-white fw-semibold"
            style={{ background: "#FF8C00" }}
          >
            End In: <span>The countdown is finished!</span>
          </div>

          {/* Swiper buttons aligned to the right */}
          <div className="d-flex align-items-center ms-3">
            <button
              className="prev-btn border-0 bg-white shadow-sm rounded-circle p-2 me-2"
              style={{ width: 36, height: 36 }}
            >
              <FaAngleLeft size={18} />
            </button>

            <button
              className="next-btn border-0 bg-white shadow-sm rounded-circle p-2"
              style={{ width: 36, height: 36 }}
            >
              <FaAngleRight size={18} />
            </button>
          </div>

        </div>

        {/* PRODUCT SLIDER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          autoplay={{ delay: 3500 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {dealProducts.map((p) => (
            <SwiperSlide key={p.id}>
              <div
                className="border rounded overflow-hidden position-relative"
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
              >

                {/* PRODUCT IMAGE */}
                <div style={{ height: "320px", position: "relative" }}>
                  <Link to={`/product/${p.id}`}>
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>

                  {/* DISCOUNT BADGE */}
                  {p.discount && (
                    <span
                      className="position-absolute top-0 end-0 px-3 py-1 fw-bold"
                      style={{ color: "#FF3B30", fontSize: "18px" }}
                    >
                      -{p.discount}%
                    </span>
                  )}

                  {/* HOVER ICONS */}
                  {hovered === p.id && (
                    <div className="position-absolute top-50 start-50 translate-middle d-flex gap-2 product-icons">
                      
                      {/* wishlist */}
                      <button
                        className="btn bg-white shadow-sm rounded px-3 py-2"
                        style={{ borderRadius: "10px" }}
                      >
                        <FaHeart size={18} />
                      </button>

                      {/* quick view */}
                      <button
                        className="btn bg-white shadow-sm rounded px-3 py-2"
                        style={{ borderRadius: "10px" }}
                        onClick={() => setQuickView(p)}
                      >
                        <FaEye size={18} />
                      </button>

                    </div>
                  )}
                </div>

                {/* ADD TO CART BUTTON */}
                <button
                  className="w-100 border-0 text-white d-flex justify-content-center align-items-center gap-2 py-3"
                  style={{
                    background: hovered === p.id ? "#FF8C00" : "#000",
                    height: "40px",
                    transition: "0.3s",
                  }}
                >
                  <FaShoppingCart size={18} />
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* QUICK VIEW MODAL */}
        {quickView && (
          <QuickViewModal product={quickView} close={() => setQuickView(null)} />
        )}

      </div>
    </div>
  );
}
