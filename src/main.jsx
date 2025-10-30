import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AssignmentProvider } from "./context/AssignmentContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AssignmentProvider>
      <App />
    </AssignmentProvider>
  </BrowserRouter>
);
