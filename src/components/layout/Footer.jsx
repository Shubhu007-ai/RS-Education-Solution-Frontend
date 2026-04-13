import "../../styles/layout/footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h2>R. S Education</h2>
          <p>
            Redefining academic excellence through personalized counseling and
            cutting-edge educational resources.
          </p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h3>Quick Links</h3>
          <Link to="/" className="footer-links-to-page">Home</Link>
          <Link to="/services" className="footer-links-to-page">Services</Link>
          <Link to="/programs" className="footer-links-to-page">Programs</Link>
          <Link to="/ai-tools" className="footer-links-to-page">AI Tools</Link>
          <Link to="/contact" className="footer-links-to-page">Contact</Link>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h3>Subscribe to Newsletter</h3>
          <p>
            Get the latest educational insights delivered to your inbox.
          </p>

          <div className="newsletter">
            <input type="email" placeholder="Your email address" />
            <button>Join</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 R. S Education Solution. All rights reserved.
      </div>
    </footer>
  );
}