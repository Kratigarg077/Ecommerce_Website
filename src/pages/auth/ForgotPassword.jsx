import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, updateUser } from "./authService";

export default function ForgotPassword() {
    const emailRef = useRef();
    const newPassRef = useRef();
    const newConfirmPassRef = useRef();
    const [error, setError] = useState("");
    const nav = useNavigate();

    const handleReset = async (e) => {
        e.preventDefault();

        try {
            
            // 1. Fetch all users
            const res = await getUsers();
            const users = res.data;

            // 2. Match email
            const user = users.find((u) => u.email === emailRef.current.value);
            if (!user) {
                setError("Email not found!");
                return;
            }

            // 3. Validate both passwords
            if(newPassRef.current.value != newConfirmPassRef.current.value ){
                setError("Password and Confirm Password do not found!");
                return;
            }

            // 4. Update password
            const updatedUser = { ...user, password: newPassRef.current.value };

            await updateUser(user.id, updatedUser);
            //axios.put(`http://localhost:3000/users/${user.id}`, updatedUser);

            alert("Password Updated Successfully!");
            nav("/auth/login");

        } catch (err) {
            console.log(err);
            setError("Something went wrong!");
        }
    };

    return (
        <div className="container py-5" style={{ maxWidth: "650px" }}>
        <div className="card p-5 shadow-sm border-0 mx-auto" style={{ maxWidth: "650px" }}>

            <h3 className="text-center mb-4">Reset Password</h3>

            <form onSubmit={handleReset}>
            <input
                ref={emailRef}
                type="email"
                placeholder="Registered Email"
                className="form-control mb-4 py-3"
                required
            />

            <input
                ref={newPassRef}
                type="password"
                placeholder="New Password"
                className="form-control mb-4 py-3"
                required
            />

            <input
                ref={newConfirmPassRef}
                type="password"
                placeholder="Confirm Password"
                className="form-control mb-4 py-3"
                required
            />

            {error && <p className="text-danger small">{error}</p>}

            <button
                type="submit"
                className="btn w-100 py-2"
                style={{ background: "#FF8C00", color: "#fff", fontWeight: 600 }}
            >
                UPDATE PASSWORD
            </button>
            </form>

            <div className="text-center mt-3">
            <Link to="/auth/login" className="fw-semibold text-dark">
                ← Back to Login
            </Link>
            </div>
        </div>
        </div>
    );
}
