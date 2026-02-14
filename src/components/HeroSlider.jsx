import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";

import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  // Pick 2 best-discount products for slider
  const slides = [...products]
    .filter(p => p.discount)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 2);

  return (
    <div className="hero-slider" style={{ background: "#d3d3d3" }}>
      <div className="container">

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev"
          }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="hero-slider-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="row align-items-center py-5" style={{ maxWidth: "85%", margin: "0 auto" }}>
                {/* LEFT CONTENT */}
                <div className="col-lg-6 col-md-6">
                  <div className="text-start">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        style={{
                          width: "60px",
                          height: "3px",
                          background: "#FF8C00",
                          marginRight: "10px"
                        }}
                      />
                      <span className="fw-semibold text-uppercase text-dark">
                        New Arrival
                      </span>
                    </div>

                    <h1 className="fw-bold display-4 mb-3">
                      {slide.title}
                    </h1>

                    <Link
                      to={`/product/${slide.id}`}
                      className="btn px-4 py-3 fw-semibold"
                      style={{
                        background: "#FF8C00",
                        color: "#fff",
                        borderRadius: "6px"
                      }}
                    >
                      Shop Now →
                    </Link>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="col-lg-6 col-md-6 position-relative text-center">

                  {/* ⭐ Reduced width from 70% → 55% */}
                  <img
                    src={slide.images[0]}
                    alt={slide.title}
                    style={{
                      width: "55%",
                      height: "auto",
                      objectFit: "contain"
                    }}
                  />

                  {/* ⭐ Badge now fits properly */}
                  <div
                    className="position-absolute top-0 end-0 translate-middle badge text-center"
                    style={{
                      width: "110px",
                      height: "110px",
                      borderRadius: "50%",
                      background: "#fff",
                      border: "4px solid #FF8C00",
                      color: "#FF8C00",
                      fontWeight: "700",
                      fontSize: "22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {slide.discount}% <br /> OFF
                  </div>
                </div>

              </div>

            </SwiperSlide>
          ))}
          
          {/* NAVIGATION ARROWS */}
          <button
            className="hero-prev border-0 bg-transparent"
            style={{
              position: "absolute",
              left: "15px",
              bottom: "20px",
              fontSize: "26px",
              cursor: "pointer",
              transition: "0.3s",
              color: "#333"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FF8C00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
          >
            <FaAngleLeft size={28} />
          </button>

          <button
            className="hero-next border-0 bg-transparent"
            style={{
              position: "absolute",
              left: "55px",
              bottom: "20px",
              fontSize: "26px",
              cursor: "pointer",
              transition: "0.3s",
              color: "#333"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FF8C00")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
          >
            <FaAngleRight size={28} />
          </button>
        </Swiper>
      </div>
    </div>
  );
}