import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUser, getUsers } from "./authService";

export default function LoginRegister() {
  const [tab, setTab] = useState("login");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const namelRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const nav = useNavigate();

  useEffect(() => {
    getUsers()
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  /* ---------------- LOGIN FUNCTION ---------------- */
  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) =>
        u.email === emailRef.current.value &&
        u.password === passwordRef.current.value
    );

    if (!user){
      setError("Invalid Credentials!");
      return;
    } 

    //Store logged-in user in sessionStorage
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
    window.dispatchEvent(new Event("user-updated")); //Custom notification inside the browser that tells all listening components to reload user data immediately.

    alert("Login Successful!");
    nav("/home"); // redirect to home
  };

  /* ---------------- REGISTER FUNCTION ---------------- */
  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now().toString(),
      name: namelRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    createUser(newUser)
      .then(() => {
        alert("Registration Successful!");
        setTab("login");
      })
      .catch(() => setError("Error creating user!"));
  };

  return (
    <div className="container py-5" style={{ maxWidth: "800px" }}>
      <div className="mx-auto" style={{ maxWidth: "650px" }}>
        
        {/* ---------------- TAB HEADER ---------------- */}
        <div className="text-center mb-4">
          <span
            onClick={() => setTab("login")}
            style={{
              fontSize: "28px",
              fontWeight: "600",
              cursor: "pointer",
              color: tab === "login" ? "#FF8C00" : "#000",
            }}
          >
            Login
          </span>

          <span style={{ margin: "0 12px", fontSize: "30px" }}>|</span>

          <span
            onClick={() => setTab("register")}
            style={{
              fontSize: "28px",
              fontWeight: "600",
              cursor: "pointer",
              color: tab === "register" ? "#FF8C00" : "#000",
            }}
          >
            Register
          </span>
        </div>

        {/* ---------------- WHITE CARD BOX ---------------- */}
        <div className="card p-5 shadow-sm border-0">

          {/* ---------------- LOGIN ---------------- */}
          {tab === "login" && (
            <>
              <form onSubmit={handleLogin}>

                <input
                  ref={emailRef}
                  className="form-control mb-4 py-3"
                  type="email"
                  placeholder="User Email"
                  required
                />

                <input
                  ref={passwordRef}
                  className="form-control mb-4 py-3"
                  type="password"
                  placeholder="Password"
                  required
                />

                {error && <p className="text-danger small">{error}</p>}

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <label className="d-flex align-items-center gap-2">
                    <input type="checkbox" /> Remember me
                  </label>

                  <Link to="/auth/forgot" className="text-dark fw-semibold">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="btn px-5 py-2 btn-color">
                  LOGIN
                </button>
              </form>
            </>
          )}

          {/* ---------------- REGISTER ---------------- */}
          {tab === "register" && (
            <>
              <form onSubmit={handleRegister}>

                <input
                  ref={namelRef}
                  className="form-control mb-4 py-3"
                  type="name"
                  placeholder="User Name"
                  required
                />

                <input
                  ref={emailRef}
                  className="form-control mb-4 py-3"
                  type="email"
                  placeholder="Email"
                  required
                />

                <input
                  ref={passwordRef}
                  className="form-control mb-4 py-3"
                  type="password"
                  placeholder="Password"
                  required
                />

                {error && <p className="text-danger small">{error}</p>}

                <button
                  type="submit"
                  className="btn w-100 py-2 mt-1 btn-color">
                  REGISTER
                </button>
              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
