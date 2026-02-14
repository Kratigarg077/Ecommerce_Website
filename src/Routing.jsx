import { Routes, Route, Outlet, Navigate } from "react-router-dom";

// Layout components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";

// Auth pages
import LoginRegister from "./pages/auth/LoginRegister";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/NotFound";
import MyAccount from "./pages/myaccount/MyAccount";
import Logout from "./pages/auth/Logout";
import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/product/ProductDetails";

// ----------------- MAIN LAYOUT -----------------
function Layout() {
  return (
    <>
      <Header />
      <main className="site-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// ----------------- ROUTING ---------------------
export default function Routing() {
  return (
    <Routes>

      {/* DEFAULT ROUTE → Home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* AUTH ROUTES (No Login Required) */}
      <Route element={<Layout />}>
        <Route path="/auth/login" element={<LoginRegister />} />
        <Route path="/auth/register" element={<LoginRegister />} />
        <Route path="/auth/forgot" element={<ForgotPassword />} />
        <Route path="/auth/logout" element={<Logout />} />
      </Route>

      {/* PAGES USING MAIN LAYOUT AFTER LOGIN */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/my-account" element={<MyAccount />} /> 
      </Route>

      {/* 404 FALLBACK */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
