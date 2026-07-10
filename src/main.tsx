import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0ea5e9",
          colorInfo: "#0ea5e9",
          colorPrimaryHover: "#0284c7",
          colorPrimaryActive: "#0369a1",
          borderRadius: 12,
          fontFamily: "Inter, system-ui, 'Segoe UI', sans-serif",
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
);
