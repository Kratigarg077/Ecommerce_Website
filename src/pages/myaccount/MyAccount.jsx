import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import PaymentMethods from "./PaymentMethods";
import Address from "./Address";
import AccountDetails from "./AccountDetails";

export default function MyAccount() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("loggedUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <div className="my-account-wrapper pb-100 pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            <div className="myaccount-page-wrapper">
              <div className="row">

                {/* LEFT MENU ALWAYS VISIBLE */}
                <div className="col-lg-3 col-md-4">
                  <div className="myaccount-tab-menu nav" role="tablist">
                    <a href="#dashboad" className="active" data-bs-toggle="tab">Dashboard</a>
                    <a href="#orders" data-bs-toggle="tab">Orders</a>
                    <a href="#payment-method" data-bs-toggle="tab">Payment Method</a>
                    <a href="#address-edit" data-bs-toggle="tab">Address</a>
                    <a href="#account-info" data-bs-toggle="tab">Account Details</a>
                    <a href="/auth/logout">Logout</a>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="col-lg-9 col-md-8">
                  <div className="tab-content" id="myaccountContent">

                    {/* DASHBOARD */}
                    <div className="tab-pane fade show active" id="dashboad">
                      {user ? (
                        <Dashboard user={user} />
                      ) : (
                        <div className="myaccount-content">
                          <h3>Dashboard</h3>
                          <p className="mb-0 text-danger fw-bold">
                            Please login to view your dashboard.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* ORDERS */}
                    <div className="tab-pane fade" id="orders">
                      {user ? (
                        <Orders user={user} />
                      ) : (
                        <div className="myaccount-content">
                          <h3>Orders</h3>
                          <p className="text-danger fw-bold">Login required to view orders.</p>
                        </div>
                      )}
                    </div>

                    {/* PAYMENT METHODS */}
                    <div className="tab-pane fade" id="payment-method">
                      {user ? (
                        <PaymentMethods user={user} />
                      ) : (
                        <div className="myaccount-content">
                          <h3>Payment Method</h3>
                          <p className="text-danger fw-bold">Login required to view payment methods.</p>
                        </div>
                      )}
                    </div>

                    {/* ADDRESS */}
                    <div className="tab-pane fade" id="address-edit">
                      {user ? (
                        <Address user={user} />
                      ) : (
                        <div className="myaccount-content">
                          <h3>Address</h3>
                          <p className="text-danger fw-bold">Login required to view address.</p>
                        </div>
                      )}
                    </div>

                    {/* ACCOUNT DETAILS */}
                    <div className="tab-pane fade" id="account-info">
                      {user ? (
                        <AccountDetails user={user} />
                      ) : (
                        <div className="myaccount-content">
                          <h3>Account Details</h3>
                          <p className="text-danger fw-bold">Login required to view account details.</p>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
