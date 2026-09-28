import React, { useState } from "react";
import { CcV4Toggle } from "@dmc/ui-v4";
import { DocFigure } from "../components/DocFigure.jsx";
import { Scope } from "../components/Scope.jsx";

export default function TogglePage() {
  const [on, setOn] = useState(true);
  return (
    <>
      <h2>Toggle</h2>
      <p className="catalog-lead">
        Переключатель для фильтров и настроек. <code>aria-pressed</code> синхронизирован с{" "}
        <code>active</code>.
      </p>
      <DocFigure
        previewSrc="/previews/toggle.svg"
        alt="Превью toggle"
        preview={
          <div className="catalog-preview">
            <Scope>
              <CcV4Toggle
                active={on}
                label="Только активные"
                onClick={() => setOn((v) => !v)}
              />
            </Scope>
          </div>
        }
      />
      <pre className="catalog-code">
{`<CcV4Toggle active={on} label="Только активные" onClick={() => setOn(!on)} />`}
      </pre>
    </>
  );
}
