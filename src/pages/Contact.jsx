import { useState } from "react";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("All fields required");
      return;
    }
    alert("Message sent!");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Contact Us</h2>

      <div className="row">
        {/* FORM */}
        <div className="col-lg-7">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              placeholder="Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="form-control mb-3"
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              className="form-control mb-3"
              rows="5"
              placeholder="Message"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button className="btn text-white" style={{ background: "#FF8C00" }}>
              Send Message
            </button>
          </form>
        </div>

        {/* INFO */}
        <div className="col-lg-5">
          <p><FaMapMarkerAlt /> India</p>
          <p><FaPhone /> +91 9999999999</p>
          <p><FaEnvelope /> support@email.com</p>
        </div>
      </div>
    </div>
  );
}