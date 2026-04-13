import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../../styles/auth/resetpassword.css";
import toast from "react-hot-toast";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { resetPasswordUser } from "../../services/authService";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;
  const otp = location.state?.otp;

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const [strength, setStrength] = useState("");

  // 🚨 SAFETY CHECK
  useEffect(() => {
    if (!email || !otp) {
      toast.error("Session expired. Please try again.");
      navigate("/forgot-password");
    }
  }, [email, otp, navigate]);

  // 🔹 PASSWORD VALIDATION
  const validatePassword = (value) => {
    let error = "";

    if (!value) {
      error = "Password is required";
      setStrength("");
    } else if (value.length < 8) {
      error = "Minimum 8 characters required";
      setStrength("weak");
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(value)
    ) {
      error = "Must include A, a, 1 and @";
      setStrength("medium");
    } else {
      error = "";
      setStrength("strong");
    }

    setErrors((prev) => ({ ...prev, password: error }));
    return error;
  };

  // 🔹 CONFIRM VALIDATION
  const validateConfirm = (value) => {
    let error = "";

    if (!value) {
      error = "Confirm your password";
    } else if (value !== formData.password) {
      error = "Passwords do not match";
    }

    setErrors((prev) => ({ ...prev, confirmPassword: error }));
    return error;
  };

  // 🔹 HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      validatePassword(value);
      if (formData.confirmPassword) {
        validateConfirm(formData.confirmPassword);
      }
    }

    if (name === "confirmPassword") {
      validateConfirm(value);
    }
  };

  // 🔹 FORM VALID
  const isFormValid =
    formData.password &&
    formData.confirmPassword &&
    !errors.password &&
    !errors.confirmPassword;

  // 🔹 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const passError = validatePassword(formData.password);
    const confirmError = validateConfirm(formData.confirmPassword);

    if (passError || confirmError) return;

    try {
      const res = await resetPasswordUser({
        email,
        otp,
        password: formData.password,
      });

      toast.success(res.data.message || "Password reset successful");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="rs-reset-container">
      <div className="rs-reset-card">

        <h2 className="rs-reset-heading">Reset Password</h2>

        <p className="rs-reset-subtext">
          Enter your new password below.
        </p>

        <form className="rs-reset-form" onSubmit={handleSubmit}>

          {/* PASSWORD */}
          <div className="rs-reset-group">
            <label>New Password</label>

            <div className="rs-reset-input">
              <FaLock />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                autoComplete="new-password"
                onChange={handleChange}
              />

              <button
                type="button"
                className="rs-reset-eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errors.password && (
              <span className="rs-reset-error">{errors.password}</span>
            )}

            {/* STRENGTH */}
            {strength && (
              <p className={`rs-reset-strength ${strength}`}>
                {strength === "weak" && "Weak Password"}
                {strength === "medium" && "Medium Password"}
                {strength === "strong" && "Strong Password"}
              </p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="rs-reset-group">
            <label>Confirm Password</label>

            <div className="rs-reset-input">
              <FaLock />

              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </div>

            {errors.confirmPassword && (
              <span className="rs-reset-error">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="rs-reset-btn"
            disabled={!isFormValid}
          >
            Reset Password →
          </button>

        </form>

        <p className="rs-reset-footer">
          Back to <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}