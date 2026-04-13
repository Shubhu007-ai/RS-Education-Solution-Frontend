import "../../styles/dashboard/dashboardHome.css";
import {
  BookOpen,
  CheckCircle,
  PieChart,
  Folder,
  Circle,
  AlertCircle,
  Check,
} from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="rs-dashboard-home">

      {/* HEADER */}
      <div className="rs-dashboard-header">
        <div>
          <h1>Welcome back, Alex!</h1>
          <p>You have 3 application deadlines approaching this month.</p>
        </div>

        <button className="rs-dashboard-primary-btn">
          + Start New Application
        </button>
      </div>

      {/* STATS */}
      <div className="rs-dashboard-stats">

        <div className="rs-dashboard-stat-card">
          <div className="rs-dashboard-stat-icon">
            <BookOpen size={18} />
          </div>
          <div>
            <p>SAVED COLLEGES</p>
            <h2>14</h2>
          </div>
        </div>

       <div className="rs-dashboard-stat-card">
          <div className="rs-dashboard-stat-icon">
            <CheckCircle size={18} />
          </div>
          <div>
            <p>ACTIVE TASKS</p>
            <h2>08</h2>
          </div>
        </div>

        <div className="rs-dashboard-stat-card">
          <div className="rs-dashboard-stat-icon">
            <PieChart size={18} />
          </div>
          <div>
            <p>COMPLETION %</p>
            <h2>68%</h2>
          </div>
        </div>

        <div className="rs-dashboard-stat-card">
          <div className="rs-dashboard-stat-icon">
            <Folder size={18} />
          </div>
          <div>
            <p>DOCUMENTS</p>
            <h2>22</h2>
          </div>
        </div>

      </div>

      {/* MAIN CARD */}
      <div className="rs-main-card">

        <div className="rs-main-left">
          <div className="rs-image-placeholder">
            <span>PRIMARY FOCUS</span>
          </div>
        </div>

        <div className="rs-main-right">

          <div className="rs-main-header">
            <h2>Master of Architecture</h2>
            <span>3 Weeks Remaining</span>
          </div>

          <p className="rs-subtitle">
            Royal Institute of Technology • Portfolio Submission Phase
          </p>

          <div className="rs-progress-wrapper">
            <div className="rs-progress-label">
              <span>Overall Progress</span>
              <span>75%</span>
            </div>

            <div className="rs-progress">
              <div className="rs-progress-bar" style={{ width: "75%" }}></div>
            </div>
          </div>

          <div className="rs-main-actions">
            <button className="rs-dashboard-secondary-btn">
              Resume Application
            </button>

            <button className="rs-dashboard-link-btn">
              View Requirements
            </button>
          </div>

        </div>

      </div>

      {/* NEW SECTION */}
      <div className="rs-bottom-grid">

        {/* LEFT SIDE */}
        <div className="rs-tasks-section">

          <div className="rs-section-header">
            <h3>Upcoming Tasks</h3>
            <span>View All</span>
          </div>

          <div className="rs-task-card">
            <Circle size={16} />
            <div>
              <h4>Upload Portfolio Drafts</h4>
              <p>Architecture • Due in 2 days</p>
            </div>
          </div>

          <div className="rs-task-card warning">
            <AlertCircle size={16} />
            <div>
              <h4>Submit English Proficiency Score</h4>
              <p>General • Due Today</p>
            </div>
          </div>

          <div className="rs-task-card completed">
            <Check size={16} />
            <div>
              <h4>Request Recommendation Letters</h4>
              <p>Completed yesterday</p>
            </div>
          </div>

          {/* AI TOOLS */}
          <div className="rs-ai-tools">
            <h3>Quick AI Tools</h3>

            <div className="rs-ai-grid">
              <div className="rs-ai-card">Chatbot</div>
              <div className="rs-ai-card">Recommender</div>
              <div className="rs-ai-card">Predictor</div>
              <div className="rs-ai-card">Planner</div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="rs-recommend-section">

          <div className="rs-section-header">
            <h3>Recommended for You</h3>
          </div>

          <div className="rs-recommend-card">
            <div className="rs-recommend-img"></div>
            <h4>Stanford School of Design</h4>
            <p>Palo Alto, CA • Top 1% in Design</p>
            <button>View Details</button>
          </div>

          <div className="rs-recommend-card">
            <div className="rs-recommend-img alt"></div>
            <h4>MIT Architecture Lab</h4>
            <p>Cambridge, MA • Research Excellence</p>
            <button>View Details</button>
          </div>

        </div>

      </div>

    </div>
  );
}