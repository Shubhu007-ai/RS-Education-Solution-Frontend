import { useState, useEffect } from "react";
import "../../styles/dashboard/bookcallmodal.css";
import {
  FaTimes,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt
} from "react-icons/fa";

export default function BookCallModal({ isOpen, onClose }) {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedFullDate, setSelectedFullDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM"];

  const quickDates = [
    { label: "Today", offset: 0 },
    { label: "Tomorrow", offset: 1 },
    { label: "In 2 Days", offset: 2 },
    { label: "Next Week", offset: 7 }
  ];

  useEffect(() => {
    if (isOpen) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [isOpen]);

  if (!isOpen) return null;

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const isPastDate = (day) => {
    if (!day) return true;
    const date = new Date(year, month, day);
    return date < new Date(today.setHours(0, 0, 0, 0));
  };

  const handleBooking = () => {
    if (!selectedFullDate || !selectedTime) return;
    setBookingDone(true);

    setTimeout(() => {
      setBookingDone(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="rs-dashboard-cs-modal-overlay">
      <div className="rs-dashboard-cs-modal">

        <button className="rs-dashboard-cs-modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        {!bookingDone ? (
          <>
            <div className="rs-dashboard-cs-modal-header">
              <h2>Book a Call</h2>
              <span>Select your preferred schedule</span>
            </div>

            {/* QUICK DATES */}
            {!showCalendar && (
              <>
                <div className="rs-dashboard-cs-quick-dates">
                  {quickDates.map((item, index) => {
                    const date = new Date();
                    date.setDate(date.getDate() + item.offset);

                    return (
                      <div
                        key={index}
                        className={`rs-dashboard-cs-quick-date ${
                          selectedFullDate?.toDateString() === date.toDateString()
                            ? "active"
                            : ""
                        }`}
                        onClick={() => setSelectedFullDate(date)}
                      >
                        <span>{item.label}</span>
                        <small>{date.toDateString().slice(0, 10)}</small>
                      </div>
                    );
                  })}
                </div>

                {/* OPEN CALENDAR BUTTON */}
                <button
                  className="rs-dashboard-cs-open-calendar"
                  onClick={() => setShowCalendar(true)}
                >
                  <FaCalendarAlt /> Pick another date
                </button>
              </>
            )}

            {/* CALENDAR (ONLY WHEN NEEDED) */}
            {showCalendar && (
              <>
                <div className="rs-dashboard-cs-calendar-header">
                  <FaChevronLeft onClick={() => setCurrentDate(new Date(year, month - 1))} />
                  <span>
                    {currentDate.toLocaleString("default", {
                      month: "long",
                      year: "numeric"
                    })}
                  </span>
                  <FaChevronRight onClick={() => setCurrentDate(new Date(year, month + 1))} />
                </div>

                <div className="rs-dashboard-cs-calendar-grid">
                  {["S","M","T","W","T","F","S"].map((d) => (
                    <div key={d} className="day-label">{d}</div>
                  ))}

                  {days.map((day, index) => {
                    const disabled = isPastDate(day);

                    return (
                      <div
                        key={index}
                        className={`day ${disabled ? "disabled" : ""}`}
                        onClick={() => {
                          if (!disabled) {
                            const date = new Date(year, month, day);
                            setSelectedFullDate(date);
                            setShowCalendar(false);
                          }
                        }}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* TIME */}
            {selectedFullDate && (
              <div className="rs-dashboard-cs-times">
                {times.map((t) => (
                  <div
                    key={t}
                    className={`rs-dashboard-cs-time ${
                      selectedTime === t ? "active" : ""
                    }`}
                    onClick={() => setSelectedTime(t)}
                  >
                    {t}
                    {selectedTime === t && <FaCheck />}
                  </div>
                ))}
              </div>
            )}

            {/* SUMMARY */}
            {selectedFullDate && selectedTime && (
              <div className="rs-dashboard-cs-summary">
                <p>
                  📅 {selectedFullDate.toDateString()}
                </p>
                <p>
                  ⏰ {selectedTime}
                </p>
              </div>
            )}

            {/* BUTTON */}
            <button
              className="rs-dashboard-cs-confirm"
              onClick={handleBooking}
            >
              Confirm Booking →
            </button>
          </>
        ) : (
          <div className="rs-dashboard-cs-success">
            <FaCheck />
            <h3>Booking Confirmed!</h3>
            <p>Your session has been scheduled.</p>
          </div>
        )}

      </div>
    </div>
  );
}