import React from "react";
import { ReqItem } from "@dmc/ui-v4";
import { DocFigure } from "../components/DocFigure.jsx";
import { Scope } from "../components/Scope.jsx";

export default function ReqItemPage() {
  return (
    <>
      <h2>ReqItem</h2>
      <p className="catalog-lead">
        Пара метка / значение для реквизитов. Проп <code>mono</code> — моноширинный ID.
      </p>
      <DocFigure
        previewSrc="/previews/req-item.svg"
        alt="Превью ReqItem"
        preview={
          <div className="catalog-preview">
            <Scope
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 16,
                padding: 16,
                background: "#f8fafc",
                borderRadius: 8,
                border: "1px solid #e2e8f0",
              }}
            >
              <ReqItem label="ИНН" value="7707083893" mono />
              <ReqItem label="Менеджер" value="Не назначен" muted />
            </Scope>
          </div>
        }
      />
      <pre className="catalog-code">
{`<ReqItem label="ИНН" value="7707083893" mono />
<ReqItem label="Менеджер" value="Не назначен" muted />`}
      </pre>
    </>
  );
}
