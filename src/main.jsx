// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import App from "./App";
import "./index.css"; // Make sure your CSS includes styles for dark mode

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
