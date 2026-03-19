import { FaTruck } from "@react-icons/all-files/fa/FaTruck";
import { FaHeadset } from "@react-icons/all-files/fa/FaHeadset";
import { FaShieldAlt } from "@react-icons/all-files/fa/FaShieldAlt";
import logoIcon from "../assets/images/logos/logo1.png";

export default function About() {
  return (
    <div className="container py-5">

      {/* HERO */}
      <div className="text-center mb-5">
        <p className="text-muted">
          We provide premium furniture & lifestyle products
        </p>
      </div>

      {/* DESCRIPTION */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6">
          <img src={logoIcon} className="img-fluid rounded" />
        </div>

        <div className="col-lg-6">
          <h4>Who We Are</h4>
          <p className="text-muted">
            We deliver high-quality modern furniture with style and comfort.
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="row text-center">
        <div className="col-md-4">
          <FaTruck size={30} />
          <h6 className="mt-2">Free Shipping</h6>
        </div>

        <div className="col-md-4">
          <FaHeadset size={30} />
          <h6 className="mt-2">24/7 Support</h6>
        </div>

        <div className="col-md-4">
          <FaShieldAlt size={30} />
          <h6 className="mt-2">Secure Payment</h6>
        </div>
      </div>
    </div>
  );
}