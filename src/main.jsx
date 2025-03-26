import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex justify-center items-center py-4">
      <div className="w-[375px] bg-white shadow-lg">
        <App />
      </div>
    </div>
  </StrictMode>
);
