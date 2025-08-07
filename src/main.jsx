import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./style.css";
import App from "./App.jsx";

// const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
