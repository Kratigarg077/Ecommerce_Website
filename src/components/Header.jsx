import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaShoppingBag } from "@react-icons/all-files/fa/FaShoppingBag";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaSignOutAlt } from "@react-icons/all-files/fa/FaSignOutAlt";
import TopBar from "./TopBar";

import logoIcon from "../assets/images/logos/logo2.png";
import Breadcrumb from "./Breadcrumb";
import SidebarCart from "./SidebarCart";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      const data = sessionStorage.getItem("loggedUser");
      if (data) {
        setLoggedUser(JSON.parse(data));
      }
    }

    loadUser(); // Load initial

    // Listen for any login/logout updates
    window.addEventListener("user-updated", loadUser);

    return () => {
      window.removeEventListener("user-updated", loadUser);
    };
    
  }, []);

  return (
    <>
      {/*   TOP BAR (Dark/Light Toggle) */}
      <TopBar />

      {/* MAIN HEADER */}
      <header className="header-area header-height-1">
        <div className="header-bottom sticky-bar">
          <div className="container">
            <div className="row align-items-center">

              {/* LOGO */}
              <div className="col-lg-3 col-md-6 col-6">
                <Link to="/">
                    <img
                      src={logoIcon}
                      alt="logo"
                      className="logo-img"
                    />
                  </Link>
              </div>

              {/* MAIN MENU */}
              <div className="col-lg-6 d-none d-lg-block">
                <div className="main-menu text-center">
                  <nav>
                    <ul>
                      <li><Link to="/">HOME</Link></li>

                      <li>
                        <Link to="/shop">SHOP</Link>
                      </li>

                      <li>
                        <Link>PAGES</Link>
                        <ul className="sub-menu-style">
                          <li><Link to="/about">About Us</Link></li>
                          <li><Link to="/cart">Cart</Link></li>
                          <li><Link to="/checkout">Checkout</Link></li>
                          <li><Link to="/my-account">My Account</Link></li>
                          <li><Link to="/wishlist">Wishlist</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                          {loggedUser ? (
                            // SHOW LOGOUT OPTION
                            <li><Link to="/auth/logout">Logout</Link></li>
                          ) : (
                            // SHOW LOGIN + REGISTER OPTIONS
                            <li><Link to="/auth/login">Login / Register</Link></li>
                          )}
                        </ul>
                      </li>

                      <li><Link to="/blog">BLOG</Link></li>
                      <li><Link to="/about">ABOUT</Link></li>
                      <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* ACTION ICONS */}
              <div className="col-lg-3 col-md-6 col-6">
                <div className="header-action-wrap">

                  {/* SEARCH */}
                  <button
                    className="header-action-style bg-transparent border-0 position-relative"
                    onClick={() => setShowSearch(!showSearch)}
                  >
                    <FaSearch size={22} />
                  </button>

                  {loggedUser ? (
                    <Link className="header-action-style" to="/auth/logout">
                      <FaSignOutAlt size={22} />
                    </Link>
                  ) : (
                    <Link className="header-action-style" to="/auth/login">
                      <FaUser size={22} />
                    </Link>
                  )}

                  {/* WISHLIST */}
                  <Link className="header-action-style" to="/wishlist">
                    <FaHeart size={22} />
                  </Link>

                  {/* CART */}
                  <button
                    className="header-action-style position-relative border-0 bg-transparent"
                    onClick={() => setCartOpen(true)}
                  >
                    <FaShoppingBag size={22} />
                    <span className="product-count">02</span>
                  </button>

                  <SidebarCart open={cartOpen} close={() => setCartOpen(false)} />

                  {/* MOBILE MENU */}
                  <button className="header-action-style d-lg-none bg-transparent border-0">
                    <FaBars size={24} />
                  </button>

                </div>
              </div>
            </div>

            {/* SEARCH BAR */}
            {showSearch && (
              <div className="search-wrap-1 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products…"
                />
              </div>
            )}
          </div>
        </div>
      </header>
      <Breadcrumb
        title="Login - Register"
        links={[
          { label: "Home", url: "/" },
          { label: "Login - Register" }
        ]}
      />
    </>
  );
}
