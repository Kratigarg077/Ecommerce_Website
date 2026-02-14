import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import paymentIcon from '../assets/images/icon-img/payment.png';
import logoIcon from '../assets/images/logos/logo1.png';

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="bg-gray-2">
        <div className="container">
          <div className="footer-top pt-80 pb-35">
            <div className="row">

              {/* ABOUT */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about mb-40">
                  <div className="footer-logo">
                    <img src={logoIcon} alt="logo" className="footer-logo-img" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="payment-img">
                    <img src={paymentIcon} alt="payment"/>
                  </div>
                </div>
              </div>

              {/* INFO */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-list mb-40">
                  <h3 className="footer-title">Information</h3>
                  <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>

              {/* ACCOUNT */}
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-list mb-40">
                  <h3 className="footer-title">My Account</h3>
                  <ul>
                    <li><a href="/my-account">My Account</a></li>
                    <li><a href="/wishlist">Wish List</a></li>
                  </ul>
                </div>
              </div>

              {/* CONTACT */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-address mb-40">
                  <h3 className="footer-title">Get in touch</h3>
                  <ul>
                    <li><span>Address:</span> Your address goes here</li>
                    <li><span>Phone:</span> (012) 345 6789</li>
                    <li><span>Email:</span> demo@example.com</li>
                  </ul>

                  <div className="open-time">
                    <p>Open: <span>8:00 AM</span> - Close: <span>18:00 PM</span></p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-3">
        <div className="container">
          <div className="footer-bottom text-center">
            <p>
              ©Aura Apparel 2025 Made with <FaHeart className="text-danger" />.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
