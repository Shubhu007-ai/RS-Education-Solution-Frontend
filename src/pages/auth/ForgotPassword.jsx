import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth/forgotpassword.css";
import { FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";


import { forgotPasswordUser } from "../../services/authService";

export default function ForgotPassword() {
  // 🔹 STATE
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // 🔹 HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await forgotPasswordUser({ email });

      toast.success(res.data.message);

      // 👉 GO TO OTP PAGE
      navigate("/verify-otp", {
        state: {
          email,
          type: "forgot",
        },
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="rs-forgot-container">
      <div className="rs-forgot-card">
        {/* TITLE */}
        <h2 className="rs-forgot-heading">Forgot Password</h2>

        <p className="rs-forgot-subtext">
          Enter your registered email and we’ll send you a reset OTP.
        </p>

        {/* 🔹 CONNECTED FORM */}
        <form className="rs-forgot-form" onSubmit={handleSubmit}>
          <div className="rs-forgot-group">
            <label>Email Address</label>

            <div className="rs-forgot-input">
              <FaEnvelope />
              <input
                type="email"
                placeholder="name@email.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* BUTTON */}
          <button type="submit" className="rs-forgot-btn" >
            Send Reset OTP →
          </button>
        </form>

        {/* BACK TO LOGIN */}
        <p className="rs-forgot-footer">
          Remember your password? <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}
