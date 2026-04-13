import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useUser } from "./context/UserContext";

function App() {
  const { loading } = useUser();

  return (
    <>
      {/* 🔥 Navbar always visible */}
      <Navbar />

      {/* 🔥 Loader OR Routes */}
      {loading ? (
        <div className="rs-loader">
          <div className="spinner"></div>
          <p>Loading your profile...</p>
        </div>
      ) : (
        <AppRoutes />
      )}
    </>
  );
}

export default App;