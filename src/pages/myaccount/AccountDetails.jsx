import { useRef, useState } from "react";
import { updateUser, getUsers } from "../auth/authService";

export default function AccountDetails({ user }) {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const currentPassRef = useRef();
  const newPassRef = useRef();
  const confirmPassRef = useRef();

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setMsg("");

    try {
      // 1. Get all users
      const res = await getUsers();
      const users = res.data;

      // 2. Find logged-in user
      const loggedUser = users.find((u) => u.id === user.id);

      if (!loggedUser) {
        setError("User not found!");
        return;
      }

      // 3. Validate current password
      if (currentPassRef.current.value !== loggedUser.password) {
        setError("Current password is incorrect!");
        return;
      }

      // 4. Validate new password match
      if (newPassRef.current.value !== confirmPassRef.current.value) {
        setError("New Password & Confirm Password must match!");
        return;
      }

      // 5. Create updated user object
      const updatedUser = {
        ...loggedUser,
        name: `${fnameRef.current.value} ${lnameRef.current.value}`,
        email: emailRef.current.value,
        password: newPassRef.current.value || loggedUser.password,
      };

      // 6. Update JSON server
      await updateUser(loggedUser.id, updatedUser);

      // 7. Update sessionStorage
      sessionStorage.setItem("user", JSON.stringify(updatedUser));

      setMsg("Account updated successfully!");

    } catch (err) {
      console.log(err);
      setError("Something went wrong!");
    }
  };

  const [first, last] = user.name.split(" ");

  return (
    <div className="myaccount-content">
      <h3>Account Details</h3>

      <div className="account-details-form">
        <form onSubmit={handleSave}>
          <div className="row">

            <div className="col-lg-6">
              <div className="single-input-item">
                <label className="required">First Name</label>
                <input type="text" defaultValue={first} ref={fnameRef} required />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-input-item">
                <label className="required">Last Name</label>
                <input type="text" defaultValue={last} ref={lnameRef} required />
              </div>
            </div>

          </div>

          <div className="single-input-item">
            <label className="required">Email Address</label>
            <input type="email" defaultValue={user.email} ref={emailRef} required />
          </div>

          <fieldset>
            <legend>Password change</legend>

            <div className="single-input-item">
              <label className="required">Current Password</label>
              <input type="password" ref={currentPassRef} required />
            </div>

            <div className="row">

              <div className="col-lg-6">
                <div className="single-input-item">
                  <label className="required">New Password</label>
                  <input type="password" ref={newPassRef} required />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="single-input-item">
                  <label className="required">Confirm Password</label>
                  <input type="password" ref={confirmPassRef} required />
                </div>
              </div>

            </div>
          </fieldset>

          {error && <p className="text-danger small">{error}</p>}
          {msg && <p className="text-success small">{msg}</p>}

          <div className="single-input-item btn-hover">
            <button className="btn-color">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
