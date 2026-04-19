import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../../styles/programs/programGuidanceModal.css";
import { FaTimes } from "react-icons/fa";

export default function ProgramGuidanceModal({
  isOpen,
  onClose,
  selectedCourse,
}) {
  const [rsProgramLoading, setRsProgramLoading] = useState(false);

  const [rsProgramForm, setRsProgramForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  /* =====================================
     INPUT CHANGE
  ===================================== */
  const rsProgramHandleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "");

      setRsProgramForm((prev) => ({
        ...prev,
        phone: onlyNumbers.slice(0, 10),
      }));

      return;
    }

    setRsProgramForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =====================================
     SUBMIT
  ===================================== */
  const rsProgramHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      setRsProgramLoading(true);

      const token = localStorage.getItem("token");

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/guidance/create`,
        {
          name: rsProgramForm.name,
          phone: rsProgramForm.phone,
          email: rsProgramForm.email,
          message: rsProgramForm.message,
          selectedCourse,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(data.message || "Request Submitted");

      setRsProgramForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setRsProgramLoading(false);
    }
  };

  /* =====================================
     JSX
  ===================================== */
  return (
    <div className="rs-program-modal-overlay" onClick={onClose}>
      <div
        className="rs-program-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button className="rs-program-modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        {/* BADGE */}
        <span className="rs-program-modal-badge">Guidance Form</span>

        {/* TITLE */}
        <h2 className="rs-program-modal-title">Need Guidance For</h2>

        <p className="rs-program-modal-course">{selectedCourse}</p>

        {/* FORM */}
        <form
          className="rs-program-modal-form"
          onSubmit={rsProgramHandleSubmit}
        >
          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={rsProgramForm.name}
            onChange={rsProgramHandleChange}
            required
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={rsProgramForm.phone}
            onChange={rsProgramHandleChange}
            maxLength="10"
            required
          />

          {rsProgramForm.phone.length > 0 &&
            rsProgramForm.phone.length < 10 && (
              <p className="rs-program-input-warning">
                Phone number must be 10 digits
              </p>
            )}

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={rsProgramForm.email}
            onChange={rsProgramHandleChange}
            required
          />

          {/* MESSAGE */}
          <textarea
            rows="5"
            name="message"
            placeholder="Tell us your requirement"
            value={rsProgramForm.message}
            onChange={rsProgramHandleChange}
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="rs-program-modal-submit"
            disabled={rsProgramLoading || rsProgramForm.phone.length !== 10}
          >
            {rsProgramLoading ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
