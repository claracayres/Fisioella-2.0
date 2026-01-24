import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Analytics } from "@vercel/analytics/react"; // Importação do Analytics
import "./styles/index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <App />
        {/* <Analytics /> Adicione o Analytics aqui */}
      </BrowserRouter>
  </StrictMode>
);