import { useState } from "react";
import "../../styles/ai-tools/studyPlanner.css";
import { CalendarDays, BookOpen, Timer, Clock, Target } from "lucide-react";

export default function StudyPlanning() {
  const [activeTool, setActiveTool] = useState("study");

  // ================= STATES =================
  const [planForm, setPlanForm] = useState({
    subject: "",
    exam_date: "",
    daily_hours: "",
    difficulty: "medium",
    topics: "",
  });

  const [summaryForm, setSummaryForm] = useState({
    topic: "",
    detail_level: "medium",
  });

  const [pomodoroForm, setPomodoroForm] = useState({
    subject: "",
    hours: "",
    session_minutes: 25,
  });

  const [planLoading, setPlanLoading] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);

  const [planResult, setPlanResult] = useState("");
  const [summaryResult, setSummaryResult] = useState("");
  const [showPomodoro, setShowPomodoro] = useState(false);

  // ================= HANDLERS =================
  const handlePlan = (e) =>
    setPlanForm({ ...planForm, [e.target.name]: e.target.value });

  const handleSummary = (e) =>
    setSummaryForm({ ...summaryForm, [e.target.name]: e.target.value });

  const handlePomodoro = (e) =>
    setPomodoroForm({ ...pomodoroForm, [e.target.name]: e.target.value });

  const cleanText = (text = "") => {
    return text
      .replace(/[#*`>\-=]/g, "")
      .replace(/=+/g, "")
      .replace(/\n+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  };

  // ================= API =================
  const generatePlan = async () => {
    setPlanLoading(true);
    setPlanResult("");

    try {
      const res = await fetch(import.meta.env.VITE_STUDY_PLAN_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...planForm,
          daily_hours: Number(planForm.daily_hours),
          goal: "pass the exam",
        }),
      });

      const data = await res.json();
      setPlanResult(data.study_plan);
    } catch (e) {
      console.error(e);
      setPlanResult("Something went wrong");
    } finally {
      setPlanLoading(false);
    }
  };

  const generateSummary = async () => {
    setSummaryLoading(true);
    setSummaryResult("");

    try {
      const res = await fetch(import.meta.env.VITE_SUMMARY_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(summaryForm),
      });

      const data = await res.json();
      setSummaryResult(data.summary);
    } catch (e) {
      console.error(e);
      setSummaryResult("Something went wrong");
    } finally {
      setSummaryLoading(false);
    }
  };

  const generatePomodoro = () => {
    if (
      !pomodoroForm.subject ||
      !pomodoroForm.hours ||
      Number(pomodoroForm.hours) <= 0
    ) {
      alert("Enter valid subject and hours");
      return;
    }

    setShowPomodoro(true);
  };

  // ================= PARSER =================
  const parseTable = (text) => {
    if (!text || typeof text !== "string") return null;

    const lines = text
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.trim().startsWith("|"));

    if (lines.length < 3) return null;

    const headers = lines[0]
      .split("|")
      .map((h) => h.trim())
      .slice(1, -1);

    const rows = lines.slice(2).map((row) => {
      const cols = row.split("|").map((c) => c.trim());
      return cols.slice(1, -1);
    });

    return { headers, rows };
  };

  // ================= STUDY PLAN RENDER =================
  const renderStudyPlanFull = () => {
    if (!planResult) return null;

    const parts = planResult.split("\n\n");

    const title = parts[0];
    const tableText = parts.find((p) => p.includes("|"));
    const breakdown = parts.find((p) => p.toLowerCase().includes("breakdown"));

    const tips = parts
      .join("\n")
      .split("\n")
      .filter((line) => {
        const l = line.toLowerCase().trim();
        return (
          l.includes("tip") ||
          l.match(/^\d+\./) || // matches "1. something"
          l.startsWith("-") // matches "- something"
        );
      });

    const table = parseTable(tableText || "");

    return (
      <div className="rs-study-plan-full">
        <h3 className="rs-study-plan-title">{cleanText(title)}</h3>

        {table && (
          <div className="rs-study-table-wrapper">
            <table className="rs-study-table">
              <thead>
                <tr>
                  {table.headers.map((h, i) => (
                    <th key={i}>{cleanText(h)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={`row-${i}`}>
                    {row.map((cell, j) => (
                      <td key={j}>{cleanText(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {breakdown && (
          <div className="rs-study-breakdown">
            <h4>Study Plan Breakdown (Hours/day)</h4>
            <pre>{cleanText(breakdown)}</pre>
          </div>
        )}

        {tips.length > 0 && (
          <div className="rs-study-tips">
            <h4>Pro Tips</h4>
            {tips.map((tip, i) => (
              <div key={i} className="rs-study-tip-item">
                <span className="rs-tip-badge">{i + 1}</span>
                <span>{cleanText(tip).replace(/^\d+\.\s*/, "")}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // ================= POMODORO RENDER =================
  const renderPomodoroTable = () => {
    if (!showPomodoro) return null;

    const totalMinutes = Number(pomodoroForm.hours) * 60;
    const work = Number(pomodoroForm.session_minutes) || 25;
    const shortBreak = 5;
    const longBreak = 15;

    let currentTime = 0;
    let sessionCount = 0;
    let formatted = [];

    const formatTime = (mins) => {
      const h = Math.floor(mins / 60);
      const m = mins % 60;
      return `${h}:${m.toString().padStart(2, "0")}`;
    };

    while (currentTime + work <= totalMinutes) {
      sessionCount++;

      const breakTime = sessionCount % 4 === 0 ? longBreak : shortBreak;

      // stop if break exceeds total time
      const nextTime = currentTime + work + breakTime;

      formatted.push({
        time: formatTime(currentTime),
        work: `${formatTime(currentTime)} - ${formatTime(currentTime + work)}`,
        break:
          nextTime <= totalMinutes
            ? `${formatTime(currentTime + work)} - ${formatTime(nextTime)}`
            : "-",
      });

      currentTime += work + breakTime;

      if (currentTime >= totalMinutes) break;
    }

    return (
      <div>
        <h4 className="rs-study-plan-title">
          {pomodoroForm.hours}-Hour {pomodoroForm.subject} Study Schedule
        </h4>

        <table className="rs-study-table">
          <thead>
            <tr>
              <th>Start Time</th>
              <th>Work Block</th>
              <th>Break</th>
            </tr>
          </thead>

          <tbody>
            {formatted.map((row, i) => (
              <tr key={`row-${i}`}>
                <td>{row.time}</td>
                <td>{row.work}</td>
                <td>{row.break}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="rs-study-note">
          This Pomodoro schedule is generated based on your selected hours and
          session time.
        </p>
      </div>
    );
  };

  const formatSummary = (text) => {
    if (!text) return "";

    return (
      text
        // headings
        .replace(/###\s*(.*?)\n/g, `<h4> $1</h4>`)

        // bold
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

        // bullets
        .replace(/•/g, "<li>")

        // fix colon spacing
        .replace(/:\s*/g, ": ")

        // line breaks
        .replace(/\n/g, "<br/>")

        // wrap lists
        .replace(/(<li>.*<\/li>)/g, "<ul>$1</ul>")
    );
  };

  // ================= UI =================
  return (
    <div className="rs-study-layout">
      {/* SIDEBAR */}
      <div className="rs-study-sidebar">
        <h2 className="rs-study-logo">StudyPlanner</h2>

        <div
          className={`rs-study-sidebar-item ${
            activeTool === "study" ? "active" : ""
          }`}
          onClick={() => setActiveTool("study")}
        >
          <CalendarDays size={18} className="rs-study-icon" />
          Study Plan
        </div>

        <div
          className={`rs-study-sidebar-item ${
            activeTool === "summary" ? "active" : ""
          }`}
          onClick={() => setActiveTool("summary")}
        >
          <BookOpen size={18} className="rs-study-icon" />
          Topic Summary
        </div>

        <div
          className={`rs-study-sidebar-item ${
            activeTool === "pomodoro" ? "active" : ""
          }`}
          onClick={() => setActiveTool("pomodoro")}
        >
          <Timer size={18} className="rs-study-icon" />
          Pomodoro
        </div>
      </div>

      {/* CONTENT */}
      <div className="rs-study-content">
        {/* STUDY PLAN */}
        {activeTool === "study" && (
          <div className="rs-study-section">
            <h2>Generate Your Study Plan</h2>
            <p>Tell us your goal and we’ll map out your journey.</p>

            <form
              className="rs-study-card"
              onSubmit={(e) => {
                e.preventDefault();
                generatePlan();
              }}
            >
              <div className="rs-study-row">
                <div className="rs-study-input-group">
                  <BookOpen size={16} className="rs-study-input-icon" />
                  <input
                    name="subject"
                    placeholder="Subject"
                    value={planForm.subject}
                    onChange={handlePlan}
                  />
                </div>
                <div className="rs-study-input-group">
                  <CalendarDays size={16} className="rs-study-input-icon" />
                  <input
                    type="date"
                    name="exam_date"
                    placeholder="Date"
                    value={planForm.exam_date}
                    onChange={handlePlan}
                  />
                </div>
              </div>

              <div className="rs-study-row">
                <div className="rs-study-input-group">
                  <Clock size={16} className="rs-study-input-icon" />
                  <input
                    type="number"
                    name="daily_hours"
                    placeholder="Daily hours"
                    value={planForm.daily_hours}
                    onChange={handlePlan}
                  />
                </div>
                <select
                  name="difficulty"
                  value={planForm.difficulty}
                  onChange={handlePlan}
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              <div className="rs-study-input-group textarea">
                <Target size={16} className="rs-study-input-icon" />
                <textarea
                  name="topics"
                  placeholder="Topics"
                  value={planForm.topics}
                  onChange={handlePlan}
                />
              </div>

              <button
                type="submit"
                className="rs-study-btn"
                disabled={
                  planLoading ||
                  !planForm.subject.trim() ||
                  !planForm.exam_date ||
                  !planForm.daily_hours ||
                  !planForm.topics.trim()
                }
              >
                {planLoading ? (
                  <span className="rs-btn-loading">
                    <span className="rs-spinner"></span>
                    Generating...
                  </span>
                ) : (
                  "Generate Plan"
                )}
              </button>
            </form>

            {(planLoading || planResult) && (
              <div className="rs-study-card">
                {planLoading ? (
                  <div className="rs-study-skeleton"></div>
                ) : (
                  renderStudyPlanFull()
                )}
              </div>
            )}
          </div>
        )}

        {/* SUMMARY */}
        {activeTool === "summary" && (
          <div className="rs-study-section">
            <h2>Topic Summary</h2>
            <p>Get concise notes for quick revision.</p>

            <form
              className="rs-study-card"
              onSubmit={(e) => {
                e.preventDefault();
                generateSummary();
              }}
            >
              <div className="rs-study-row">
                <div className="rs-study-input-group">
                  <input
                    name="topic"
                    placeholder="Topic"
                    value={summaryForm.topic}
                    onChange={handleSummary}
                  />
                </div>

                <div className="rs-study-input-group">
                  <select
                    name="detail_level"
                    value={summaryForm.detail_level}
                    onChange={handleSummary}
                  >
                    <option>Short</option>
                    <option>Medium</option>
                    <option>Detailed</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="rs-study-btn"
                disabled={summaryLoading || !summaryForm.topic}
              >
                {summaryLoading ? (
                  <span className="rs-btn-loading">
                    <span className="rs-spinner"></span>
                    Creating...
                  </span>
                ) : (
                  "Create Summary"
                )}
              </button>
            </form>

            <div className="rs-study-card">
              {summaryLoading ? (
                <div className="rs-study-skeleton"></div>
              ) : (
                <div
                  className="rs-study-summary"
                  dangerouslySetInnerHTML={{
                    __html: formatSummary(summaryResult),
                  }}
                />
              )}
            </div>
          </div>
        )}

        {/* POMODORO */}
        {activeTool === "pomodoro" && (
          <div className="rs-study-section">
            <h2>Pomodoro Schedule</h2>
            <p>Optimize your focus with timed blocks.</p>

            <form
              className="rs-study-card"
              onSubmit={(e) => {
                e.preventDefault();
                generatePomodoro();
              }}
            >
              <div className="rs-study-row">
                <div className="rs-study-input-group">
                  <BookOpen size={16} className="rs-study-input-icon" />
                  <input
                    name="subject"
                    placeholder="Subject"
                    onChange={handlePomodoro}
                  />
                </div>
                <div className="rs-study-input-group">
                  <Clock size={16} className="rs-study-input-icon" />
                  <input
                    type="number"
                    name="hours"
                    placeholder="Total Hours"
                    onChange={handlePomodoro}
                  />
                </div>
                <div className="rs-study-input-group">
                  <Timer size={16} className="rs-study-input-icon" />
                  <input
                    type="number"
                    name="session_minutes"
                    placeholder="Session Minutes (e.g. 25)"
                    onChange={handlePomodoro}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="rs-study-btn"
                disabled={!pomodoroForm.hours || !pomodoroForm.subject}
              >
                Generate Schedule
              </button>
            </form>

            <div className="rs-study-card">{renderPomodoroTable()}</div>
          </div>
        )}
      </div>
    </div>
  );
}
