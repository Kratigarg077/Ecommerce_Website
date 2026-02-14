import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const nav = useNavigate();

  useEffect(() => {
    // remove user from session
    sessionStorage.removeItem("loggedUser");
    window.dispatchEvent(new Event("user-updated")); //notify all listening components to reload user data

    // redirect to login
    nav("/auth/login", { replace: true });
  }, [nav]);

  return null; // no UI needed
}
