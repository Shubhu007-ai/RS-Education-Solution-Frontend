import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setPasswordUser } from "../../services/authService";
import toast from "react-hot-toast";
import "../../styles/auth/setpassword.css";
import { useUser } from "../../context/UserContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUserContext } = useUser();

  const email = location.state?.email;

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    password: "",
    confirm: "",
  });

  const [strength, setStrength] = useState("");

  // 🔥 SAFETY CHECK
  useEffect(() => {
    if (!email) {
      toast.error("Session expired. Please try again.");
      navigate("/login");
    }
  }, [email, navigate]);

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
    } else if (value !== password) {
      error = "Passwords do not match";
    }

    setErrors((prev) => ({ ...prev, confirm: error }));
    return error;
  };

  // 🔹 HANDLE CHANGE
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);

    if (confirm) validateConfirm(confirm);
  };

  const handleConfirmChange = (e) => {
    const value = e.target.value;
    setConfirm(value);
    validateConfirm(value);
  };

  // 🔹 FORM VALID
  const isFormValid =
    password &&
    confirm &&
    !errors.password &&
    !errors.confirm;

  // 🔹 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const passError = validatePassword(password);
    const confirmError = validateConfirm(confirm);

    if (passError || confirmError) return;

    try {
      const res = await setPasswordUser({ email, password });

      localStorage.setItem("token", res.data.token);
      await loginUserContext();

      toast.success("Password set successfully 🎉");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to set password");
    }
  };

  return (
    <div className="rs-setpass-container">
      <div className="rs-setpass-card">

        <h2>Set Your Password</h2>
        <p>Create a password for future login</p>

        <form onSubmit={handleSubmit}>

          {/* PASSWORD */}
          <div className="rs-setpass-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />

            <button
              type="button"
              className="rs-setpass-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {errors.password && (
            <span className="rs-setpass-error">{errors.password}</span>
          )}

          {/* STRENGTH */}
          {strength && (
            <p className={`rs-setpass-strength ${strength}`}>
              {strength === "weak" && "Weak Password"}
              {strength === "medium" && "Medium Password"}
              {strength === "strong" && "Strong Password"}
            </p>
          )}

          {/* CONFIRM */}
          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={handleConfirmChange}
          />

          {errors.confirm && (
            <span className="rs-setpass-error">{errors.confirm}</span>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="rs-setpass-btn"
            disabled={!isFormValid}
          >
            Set Password
          </button>

        </form>
      </div>
    </div>
  );
}