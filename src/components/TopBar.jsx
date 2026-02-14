import React, { useState, useEffect } from "react";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { FiMoon } from "@react-icons/all-files/fi/FiMoon";

export default function TopBar() {
  const [dark, setDark] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  // Load logged user from session storage
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

  // Toggle theme
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  return (
    <div className="bg-light py-1" style={{ fontSize: "14px" }}>
      <div className="container d-flex justify-content-between align-items-center">

        {/* LEFT — Welcome message */}
        <div className="text-muted">
          Welcome to our Store
          {loggedUser ? `, ${loggedUser.name}!` : "!"}
        </div>

        {/* RIGHT — Theme Toggle */}
        <button
          className="border-0 bg-transparent d-flex align-items-center"
          style={{ fontSize: "18px" }}
          onClick={() => setDark(!dark)}
        >
          {dark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </div>
  );
}
