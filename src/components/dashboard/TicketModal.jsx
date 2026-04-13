import { useState, useEffect } from "react";
import "../../styles/dashboard/ticketmodal.css";
import { FaTimes, FaCheck } from "react-icons/fa";

export default function TicketModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!username || !category || !description) return;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setUsername("");
      setCategory("");
      setDescription("");
      onClose();
    }, 2000);
  };

  return (
    <div className="rs-dashboard-cs-ticket-overlay">
      <div className="rs-dashboard-cs-ticket-modal">

        {/* CLOSE */}
        <button
          className="rs-dashboard-cs-ticket-close"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        {!submitted ? (
          <>
            {/* HEADER */}
            <div className="rs-dashboard-cs-ticket-header">
              <h2>Submit a Ticket</h2>
              <p>Tell us what issue you're facing</p>
            </div>

            {/* USERNAME */}
            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rs-dashboard-cs-ticket-input"
            />

            {/* CATEGORY */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rs-dashboard-cs-ticket-input"
            >
              <option value="">Select Category</option>
              <option>Application Issue</option>
              <option>Document Upload</option>
              <option>Payment / Billing</option>
              <option>Technical Problem</option>
              <option>Other</option>
            </select>

            {/* DESCRIPTION */}
            <textarea
              placeholder="Describe your issue..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rs-dashboard-cs-ticket-textarea"
            />

            {/* SUBMIT */}
            <button
              className="rs-dashboard-cs-ticket-submit"
              onClick={handleSubmit}
              disabled={!username || !category || !description}
            >
              Submit Ticket →
            </button>
          </>
        ) : (
          <div className="rs-dashboard-cs-ticket-success">
            <FaCheck />
            <h3>Ticket Submitted</h3>
            <p>Your request has been received.</p>
            <span>We’ll get back within 24 hours.</span>
          </div>
        )}
      </div>
    </div>
  );
}