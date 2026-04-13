import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/auth/verifyotp.css";
import toast from "react-hot-toast";
import { useUser } from "../../context/UserContext";

import {
  verifyOtp,
  resendOtp,
  verifyForgotOtp,
} from "../../services/authService";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();

  const { loginUserContext } = useUser();

  const email = location.state?.email;
  const type = location.state?.type || "signup";

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState(60);
  const [shake, setShake] = useState(false);

  // ⏳ TIMER
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (!email) {
      toast.error("Session expired. Please try again.");
      navigate("/login");
    }
  }, [email, navigate]);

  // 🔢 HANDLE CHANGE
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // ⬅️ BACKSPACE
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // 📋 PASTE
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(paste)) return;

    const newOtp = paste.split("");
    setOtp(newOtp);
    inputsRef.current[5].focus();
  };

  // 🚀 AUTO SUBMIT
  useEffect(() => {
    if (otp.every((d) => d !== "")) {
      handleVerify();
    }
  }, [otp]);

  // 🔹 VERIFY
  const handleVerify = async (e) => {
    if (e) e.preventDefault();

    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) return;

    setLoading(true);

    try {
      let res;

      if (type === "signup") {
        res = await verifyOtp({ email, otp: finalOtp });

        if (res.data.requirePasswordSetup) {
          return navigate("/set-password", { state: { email } });
        }
        localStorage.setItem("token", res.data.token);

        await loginUserContext();

        toast.success("Account verified successfully 🎉");

        navigate("/");
      }

      if (type === "forgot") {
        await verifyForgotOtp({ email, otp: finalOtp });

        toast.success("OTP verified");

        navigate("/reset-password", {
          state: { email, otp: finalOtp },
        });
      }

    } catch (err) {
      setShake(true);
      setTimeout(() => setShake(false), 400);

      toast.error(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // 🔁 RESEND
  const handleResend = async () => {
    if (timer > 0) return;

    try {
      await resendOtp({ email });
      toast.success("OTP resent");
      setTimer(60);
      setOtp(new Array(6).fill(""));
      inputsRef.current[0].focus();
    } catch {
      toast.error("Failed to resend OTP");
    }
  };

  return (
    <div className="rs-otp-container">
      <div className={`rs-otp-card ${shake ? "shake" : ""}`}>

        <h2>Verify OTP</h2>
        <p>Enter the 6-digit code sent to your email</p>

        <form onSubmit={handleVerify}>

          <div className="rs-otp-boxes" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="rs-otp-box"
              />
            ))}
          </div>

          <button className="rs-otp-btn" disabled={loading}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

        </form>

        <p className="rs-otp-resend">
          {timer > 0 ? (
            <>Resend OTP in <span>{timer}s</span></>
          ) : (
            <>Didn’t receive OTP? <span onClick={handleResend}>Resend</span></>
          )}
        </p>

      </div>
    </div>
  );
}