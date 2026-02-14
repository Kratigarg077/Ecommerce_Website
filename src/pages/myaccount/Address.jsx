import { useState } from "react";
import { updateUser } from "../auth/authService";

export default function Address({ user }) {

  // SINGLE STATE FOR ALL ADDRESS FIELDS
  const [form, setForm] = useState({
    name: user.name,
    city: user.city,
    mobile: user.mobile
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = { ...user, ...form };

      await updateUser(user.id, updatedUser);

      sessionStorage.setItem("user", JSON.stringify(updatedUser));

      alert("Address Updated Successfully!");
      setEditMode(false);

    } catch (err) {
      console.log(err);
      alert("Error updating address!");
    }
  };

  return (
    <div className="myaccount-content">
      <h3>Billing Address</h3>

      {/* ----------- VIEW MODE ----------- */}
      {!editMode && (
        <>
          <address>
            <p><strong>{form.name}</strong></p>
            <p>{form.city}</p>
            <p>Mobile: {form.mobile}</p>
          </address>

          <div className="single-input-item btn-hover">
            <button type="button" className="btn btn-color text-white fw-semibold px-4 py-2" onClick={() => setEditMode(true)}>
              <i className="fa fa-edit me-2"></i> Edit Address
            </button>
          </div>

        </>
      )}

      {/* ----------- EDIT MODE ----------- */}
      {editMode && (
        <form onSubmit={handleSave} className="mt-3">

          <div className="single-input-item">
            <label className="required">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="single-input-item">
            <label className="required">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="single-input-item">
            <label className="required">Mobile</label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
            />
          </div>

          {/* Save + Cancel Buttons */}
          <div className="single-input-item btn-hover mt-3 d-flex gap-3">

            <div className="single-input-item btn-hover">
              <button type="submit"
                className="btn btn-color text-white fw-semibold px-4 py-2 w-100">
                Save Changes
              </button>
            </div>

            <button type="button" className="btn btn-secondary fw-semibold px-4 py-2 ms-2" onClick={() => setEditMode(false)}>
              Cancel
            </button>
          </div>

        </form>
      )}
    </div>
  );
}