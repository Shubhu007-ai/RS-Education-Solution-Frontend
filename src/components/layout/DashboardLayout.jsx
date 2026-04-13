import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../styles/layout/dashboardLayout.css";

export default function DashboardLayout({ children }) {
  return (

    <>
    <div className="dashboard-wrapper">

     

      {/* MAIN BODY */}
      <div className="dashboard-body">

        {/* SIDEBAR */}
        <Sidebar />

        {/* CONTENT AREA */}
        <div className="dashboard-content">
          {children}
        </div>

      </div>
    </div>
    </>
  );
}