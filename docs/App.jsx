import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage.jsx";
import ButtonsPage from "./pages/ButtonsPage.jsx";
import DashCardPage from "./pages/DashCardPage.jsx";
import ReqItemPage from "./pages/ReqItemPage.jsx";
import FormPage from "./pages/FormPage.jsx";
import TogglePage from "./pages/TogglePage.jsx";
import CenteredModalPage from "./pages/CenteredModalPage.jsx";
import SidePanelPage from "./pages/SidePanelPage.jsx";

const links = [
  { to: "/", label: "Обзор" },
  { to: "/buttons", label: "Кнопки" },
  { to: "/dash-card", label: "DashCard" },
  { to: "/req-item", label: "ReqItem" },
  { to: "/form", label: "Форма" },
  { to: "/toggle", label: "Toggle" },
  { to: "/centered-modal", label: "Модалка по центру" },
  { to: "/side-panel", label: "Боковая панель" },
];

export default function App() {
  return (
    <div className="catalog-layout">
      <nav className="catalog-nav">
        <h1>DMC UI v4</h1>
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <main className="catalog-main">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/dash-card" element={<DashCardPage />} />
          <Route path="/req-item" element={<ReqItemPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/toggle" element={<TogglePage />} />
          <Route path="/centered-modal" element={<CenteredModalPage />} />
          <Route path="/side-panel" element={<SidePanelPage />} />
        </Routes>
      </main>
    </div>
  );
}
