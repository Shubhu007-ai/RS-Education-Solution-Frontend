import React from "react";
import "../styles/pages/home.css";
import Footer from "../../src/components/layout/Footer";
import { Bot, BotMessageSquare, Sparkles } from 'lucide-react';


const Home = () => {
  return (
    <div className="rs-wrapper">
      <main className="rs-main-content">
        {/* Hero Section */}
        <section className="rs-hero container">
          <div className="rs-hero-text">
            <div className="rs-badge">✨ Future-Ready Education</div>
            <h1 className="rs-hero-title">
              Empowering Your Future with{" "}
              <span className="rs-italic">Smart Guidance</span>
            </h1>
            <p className="rs-hero-desc">
              Navigating the global education landscape with AI-powered insights
              and expert human counseling to find your perfect academic path.
            </p>
            <div className="rs-hero-actions">
              <button className="rs-btn-primary">Start AI Analysis</button>
              <button className="rs-btn-secondary">Explore Programs</button>
            </div>
          </div>
          <div className="rs-hero-image-area">
            <div className="rs-clay-card rs-hero-img-card">
              <img src="/src/assets/images/Student.png" alt="Student" />
            </div>
            <div className="rs-floating-card">
              <div>
                <BotMessageSquare size={32} />
                <p className="rs-float-title">AI-Powered</p>
                <p className="rs-float-subtitle">Real-time matching</p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="rs-highlights">
          <div className="container">
            <div className="rs-section-header">
              <h2>Why Choose R. S Education?</h2>
              <p>Our commitment to excellence is reflected in our numbers.</p>
            </div>
            <div className="rs-stats-grid">
              <div className="rs-stat-item">
                <span className="rs-stat-icon">🎓</span>
                <h3>200+</h3>
                <p>GLOBAL COLLEGES</p>
              </div>
              <div className="rs-stat-item">
                <span className="rs-stat-icon">💰</span>
                <h3>100%</h3>
                <p>SCHOLARSHIPS</p>
              </div>
              <div className="rs-stat-item">
                <span className="rs-stat-icon">🎧</span>
                <h3>Expert</h3>
                <p>COUNSELING</p>
              </div>
              <div className="rs-stat-item">
                <span className="rs-stat-icon">✨</span>
                <h3>AI-Led</h3>
                <p>GUIDANCE</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="rs-about rs-container">
          <div className="rs-about-left">
            <div className="rs-about-img-card">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                alt="meeting"
              />
            </div>
          </div>

          <div className="rs-about-right">
            <h2>Redefining Education Consulting for the Digital Age</h2>

            <p>
              At R. S Education Solution, we believe that every student deserves
              a personalized roadmap. We combine traditional counseling with AI
              tools.
            </p>

            <ul className="rs-about-list">
              <li>✔ Personalized 1-on-1 mentorship sessions</li>
              <li>✔ Direct partnerships with global universities</li>
              <li>✔ End-to-end visa and document support</li>
            </ul>

            <button className="rs-link-btn">Learn Our Story →</button>
          </div>
        </section>

        <br />

        {/* AI Tools Section */}
        <section className="rs-ai-section">
          {/* HEADING CENTER */}
          <div className="rs-ai-header">
           <Bot size={60} />
            <h2>AI Tools Preview</h2>
            <p>
              Experience the future of college selection with our proprietary
              algorithmic tools designed for students.
            </p>
          </div>

          {/* TOOLS */}
          <div className="rs-ai-tools">
            <div className="rs-tool-card">
              <div className="rs-icon">📄</div>
              <h3>SOP Analyzer</h3>
              <p>
                Get instant feedback on your Statement of Purpose using our NLP
                model trained on successful applications.
              </p>
              <button className="rs-btn-primary">Try Now</button>
            </div>

            <div className="rs-tool-card">
              <div className="rs-icon">📅</div>
              <h3>Timeline Planner</h3>
              <p>
                A dynamic scheduler that adjusts based on your target intake and
                application deadlines.
              </p>
              <button className="rs-btn-primary">Try Now</button>
            </div>
          </div>

          {/* INSIGHTS */}
          <div className="rs-ai-insights">
            <div className="rs-insight-header">
              <h3>Live AI Insights</h3>
              <span className="rs-active">ACTIVE</span>
            </div>

            <div className="rs-insight-grid">
              <div className="rs-recessed">
                <p>Success Rate</p>
                <h4>98%</h4>
              </div>

              <div className="rs-recessed">
                <p>Avg. Saving</p>
                <h4>$12k</h4>
              </div>

              <div className="rs-recessed">
                <p>Processed</p>
                <h4>5k+</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="rs-success">
          {/* CENTER HEADING */}
          <h2 className="rs-success-title">Success Stories</h2>

          <div className="rs-carousel">
            <div className="rs-carousel-track">
              {/* ORIGINAL CARDS */}
              <div className="rs-success-grid">
                {/* CARD 1 */}
                <div className="rs-success-card">
                  <div className="rs-stars">★★★★★</div>
                  <p className="rs-success-text">
                    "The AI matching tool found a university I hadn’t even
                    considered, and now I’m there on a full scholarship.
                    Life-changing experience!"
                  </p>
                  <div className="rs-user">
                    <img src="/user1.png" alt="Rahul" />
                    <div>
                      <h4>Rahul Mehta</h4>
                      <p>MS in CS, Germany</p>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="rs-success-card">
                  <div className="rs-stars">★★★★★</div>
                  <p className="rs-success-text">
                    "Their expert counseling for the visa process was flawless.
                    I felt confident at every step of my application to Canada."
                  </p>
                  <div className="rs-user">
                    <img src="/user2.png" alt="Priya" />
                    <div>
                      <h4>Priya Singh</h4>
                      <p>MBA, University of Toronto</p>
                    </div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="rs-success-card">
                  <div className="rs-stars">★★★★★</div>
                  <p className="rs-success-text">
                    "The SOP analyzer helped me refine my essays to perfection.
                    I got admits from all 3 of my dream colleges in the UK!"
                  </p>
                  <div className="rs-user">
                    <img src="/user3.png" alt="Arjun" />
                    <div>
                      <h4>Arjun V.</h4>
                      <p>MSc Data Science, UK</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DUPLICATE (IMPORTANT) */}
              <div className="rs-success-grid">
                {/* SAME 3 CARDS AGAIN */}
                <div className="rs-success-card">
                  <div className="rs-stars">★★★★★</div>
                  <p className="rs-success-text">
                    "The AI matching tool found a university I hadn’t even
                    considered, and now I’m there on a full scholarship.
                    Life-changing experience!"
                  </p>
                  <div className="rs-user">
                    <img src="/user1.png" alt="Rahul" />
                    <div>
                      <h4>Rahul Mehta</h4>
                      <p>MS in CS, Germany</p>
                    </div>
                  </div>
                </div>

                <div className="rs-success-card">
                  <div className="rs-stars">★★★★★</div>
                  <p className="rs-success-text">
                    "Their expert counseling for the visa process was flawless.
                    I felt confident at every step of my application to Canada."
                  </p>
                  <div className="rs-user">
                    <img src="/user2.png" alt="Priya" />
                    <div>
                      <h4>Priya Singh</h4>
                      <p>MBA, University of Toronto</p>
                    </div>
                  </div>
                </div>

                <div className="rs-success-card">
                  <div className="rs-stars">★★★★★</div>
                  <p className="rs-success-text">
                    "The SOP analyzer helped me refine my essays to perfection.
                    I got admits from all 3 of my dream colleges in the UK!"
                  </p>
                  <div className="rs-user">
                    <img src="/user3.png" alt="Arjun" />
                    <div>
                      <h4>Arjun V.</h4>
                      <p>MSc Data Science, UK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
