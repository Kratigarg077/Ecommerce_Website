import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";

import BanerImage3 from "../assets/images/banerImage3.png";
import BanerImage4 from "../assets/images/banerImage4.png";

export default function Breadcrumb({ links = [] }) {
  const location = useLocation();
  const path = location.pathname;

  // Route → Title map
  const routeTitles = {
    "/auth/login": "Login",
    "/auth/register": "Register",
    "/auth/forgot": "Forgot Password",
    "/cart": "Cart",
    "/checkout": "Checkout",
    "/shop": "Shop",
    "/contact": "Contact",
    "/wishlist": "Wishlist",
    "/about": "About",
    "/blog": "Blog",
    "/my-account": "My Account"
  };

  // Handle dynamic product route
  const dynamicTitle = path.startsWith("/product/")
    ? "Product Details"
    : null;

  const pageTitle = dynamicTitle || routeTitles[path];

  // Hide breadcrumb on home
  if (!pageTitle || path === "/" || path === "/home") return null;

  // Build Updated Breadcrumb Links
  const finalLinks = [
    { label: "Home", url: "/" },
    { label: pageTitle }
  ];

  return (
    <div className="breadcrumb-area bg-gray-4 breadcrumb-padding-1">
      <div className="container">
        <div className="breadcrumb-content text-center">

          {/* DYNAMIC TITLE */}
          <h2 className="fw-bold mb-2">{pageTitle}</h2>

          <ul>
            {finalLinks.map((item, index) => (
              <React.Fragment key={index}>
                <li>
                  {item.url ? (
                    <Link to={item.url}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </li>

                {index < finalLinks.length - 1 && (
                  <li>
                    <FaAngleRight />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>

        </div>
      </div>

      {/* STATIC BACKGROUND IMAGES */}
      <div className="breadcrumb-img-1">
        <img src={BanerImage3} alt="" />
      </div>

      <div className="breadcrumb-img-2">
        <img src={BanerImage4} alt="" />
      </div>
    </div>
  );
}
