import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// 🔥 GOOGLE AUTH
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App.jsx";

// 🔔 Toast
import { Toaster } from "react-hot-toast";

// 🌍 Global styles
import "./styles/global.css";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(

   <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>

  <BrowserRouter>

    <UserProvider>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#f5dcca",
            color: "#000000",
            borderRadius: "10px",
            padding: "12px 16px",
            fontSize: "13px",
            marginTop: "65px",
            zIndex: 2000000,
          },
        }}
      />

      <App />

    </UserProvider>

  </BrowserRouter>

</GoogleOAuthProvider>
  
);