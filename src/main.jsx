import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.2, // smoothness
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
