import { useEffect } from "react";
import "../../src/styles/pages/services.css";
import Footer from "../../src/components/layout/Footer";

import {
  FaBookOpen,
  FaMoneyBill,
  FaBrain,
  FaUserGraduate,
  FaLanguage,
  FaIdCard,
  FaUniversity,
  FaFileAlt,
  FaBriefcase,
  FaCalendar,
  FaGlobe,
  FaGraduationCap
} from "react-icons/fa";

export default function Services() {

  // 🔥 SCROLL ANIMATION
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  const services = [
    {
      icon: <FaGraduationCap />,
      title: "Career Counseling",
      desc: "Expert guidance to identify your strengths and align them with the most promising career paths in today's market."
    },
    {
      icon: <FaUniversity />,
      title: "Admission Counseling",
      desc: "End-to-end support for college admissions, from university selection to successful enrollment strategies."
    },
    {
      icon: <FaGlobe />,
      title: "Study Abroad",
      desc: "Unlock international horizons with our specialized global education placement and visa consultancy services."
    },
    {
      icon: <FaBookOpen />,
      title: "Entrance Exam Prep",
      desc: "Targeted coaching for competitive entrance exams with personalized study plans and performance tracking."
    },
    {
      icon: <FaMoneyBill />,
      title: "Scholarship Guidance",
      desc: "Maximize your funding opportunities through our database of scholarships and expert application reviews."
    },
    {
      icon: <FaBrain />,
      title: "AI Skill Assessment",
      desc: "Leverage advanced AI tools to evaluate your cognitive skills and discover hidden academic potential."
    },
    {
      icon: <FaUserGraduate />,
      title: "Student Mentorship",
      desc: "Connect with experienced industry professionals for one-on-one sessions to navigate academic challenges."
    },
    {
      icon: <FaLanguage />,
      title: "Language Training",
      desc: "Intensive courses for IELTS, TOEFL, and other language proficiency tests required for global study."
    },
    {
      icon: <FaIdCard />,
      title: "Profile Building",
      desc: "Strategic advice on extracurriculars and internships to make your academic profile stand out."
    },
    {
      icon: <FaUniversity />,
      title: "Education Loans",
      desc: "Assistance in securing education loans with competitive interest rates and seamless documentation."
    },
    {
      icon: <FaFileAlt />,
      title: "Statement of Purpose",
      desc: "Professional editing and drafting assistance for your SOPs, LORs, and university application essays."
    },
    {
      icon: <FaBriefcase />,
      title: "Placement Support",
      desc: "Career readiness workshops, mock interviews, and direct placement assistance with our corporate partners."
    },
    {
      icon: <FaCalendar />,
      title: "Webinars & Events",
      desc: "Exclusive access to university fairs and academic seminars featuring international faculty members."
    },
    {
      icon: <FaGlobe />,
      title: "Post-Arrival Support",
      desc: "Accommodation assistance and cultural orientation for students moving to new international destinations."
    }
  ];

  return (
    <>
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero fade-up">
        <p className="tag">OUR EXPERTISE</p>
        <h1>
          Empowering Your <br /> Educational Journey
        </h1>
        <p className="subtitle">
          Comprehensive solutions designed to navigate the complexities of modern education,
          from local excellence to global opportunities.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid">
        {services.map((service, index) => (
          <div className="service-card fade-up" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span className="link">BOOK NOW →</span>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="cta-section fade-up">
        
  <div className="cta-content">

    {/* LEFT TEXT */}
    <div className="cta-left">
    <div className="cta-text">
      <h2>Can't find what you're looking for?</h2>
      <p>
        Our team is always ready to create a bespoke educational plan tailored to your
        unique requirements. Let's build your future together.
      </p>

      <div className="cta-buttons">
        <button className="primary">Schedule a Free Call</button>
        <button className="secondary">Explore Programs</button>
      </div>
    </div>
</div>

<div className="cta-right">

    {/* RIGHT IMAGE */}
    <div className="cta-image">
      <img src="/src/assets/images/Services_blog.png" alt="Students discussion" />
    </div>
</div>
  </div>
</section>

    </div>
<Footer />

    </>
  );
}