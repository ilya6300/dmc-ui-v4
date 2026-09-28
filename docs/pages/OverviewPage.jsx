import React from "react";

export default function OverviewPage() {
  return (
    <>
      <h2>Обзор</h2>
      <p className="catalog-lead">
        Пакет <strong>@dmc/ui-v4</strong> — токены, CSS-примитивы и React-компоненты
        в языке карточки компании v4. Корень страницы: классы{" "}
        <code>dmc-v4 company-card-v4</code> (alias для совместимости с dmc-lk).
      </p>
      <div className="catalog-section">
        <h3>Подключение</h3>
        <pre className="catalog-code">
{`// package.json
"dependencies": {
  "@dmc/ui-v4": "git+https://github.com/ilya6300/dmc-ui-v4.git#v4.1.0"
}

// точка входа приложения
import "@dmc/ui-v4/dist/dmc-v4.css";
import { DashCard, DmcSidePanel } from "@dmc/ui-v4";`}
        </pre>
      </div>
      <div className="catalog-section">
        <h3>Слои</h3>
        <ul className="catalog-lead">
          <li>Токены: <code>--mast-blue</code>, <code>--main-blue-1</code>, <code>--cc-v4-*</code></li>
          <li>Примитивы: кнопки, card, формы, site-modal</li>
          <li>Оверлеи: <code>CcV4CenteredModal</code>, <code>DmcSidePanel</code></li>
          <li>Кастомные блоки в приложении — на тех же классах и токенах</li>
        </ul>
      </div>
    </>
  );
}
