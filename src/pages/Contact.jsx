import "../../src/styles/pages/contact.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaStore } from "react-icons/fa";
import ContactBG from "/src/assets/images/contact_bg.png";
import Footer from "/src/components/layout/Footer";

export default function Contact() {
  return (
    <div className="rs-contact-page">
      <section className="rs-contact-hero">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="rs-contact-bg">
          <img src={ContactBG} alt="background" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="rs-contact-container">
        {/* LEFT SIDE */}
        <div className="rs-contact-left">
          <div className="rs-contact-card">
            <FaPhoneAlt className="rs-contact-icon" />
            <h4>Phone</h4>
            <p>+91 7011557354</p>
          </div>

          <div className="rs-contact-card">
            <FaWhatsapp className="rs-contact-icon" />
            <h4>Whatsapp</h4>
            <p>7011557354</p>
          </div>

          <div className="rs-contact-card">
            <FaEnvelope className="rs-contact-icon" />
            <h4>Email</h4>
            <p>support@yoursite.com</p>
          </div>

          <div className="rs-contact-card">
            <FaStore className="rs-contact-icon" />
            <h4>Our Office</h4>
            <p>Parvatiya Colony, Faridabad, India</p>
          </div>

          {/* MAP */}
          <div className="rs-contact-map">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{
                border: 0,
                borderRadius: "16px",
                width: "100%",
                height: "300px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rs-contact-right">
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <form className="rs-contact-form">
            <div className="rs-contact-input-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="rs-contact-input-group">
              <label>Email</label>
              <input type="email" placeholder="example@email.com" />
            </div>

            <div className="rs-contact-input-group">
              <label>Subject</label>
              <input type="text" placeholder="Title" />
            </div>

            <div className="rs-contact-input-group">
              <label>Message</label>
              <textarea placeholder="Type here..." rows="5"></textarea>
            </div>

            <button type="submit" className="rs-contact-btn">
              Send Now
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
