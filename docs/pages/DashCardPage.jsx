import React from "react";
import { BtnPrimaryV4, DashCard } from "@dmc/ui-v4";
import { DocFigure } from "../components/DocFigure.jsx";
import { Scope } from "../components/Scope.jsx";

export default function DashCardPage() {
  return (
    <>
      <h2>DashCard</h2>
      <p className="catalog-lead">
        Карточка секции: <code>card</code> + <code>dash-card</code>, заголовок{" "}
        <code>dash-card-title</code> цвета <code>--mast-blue</code>.
      </p>
      <DocFigure
        previewSrc="/previews/dash-card.svg"
        alt="Превью DashCard"
        preview={
          <div className="catalog-preview">
            <Scope>
              <DashCard
                title="Лицензии"
                headerActions={<BtnPrimaryV4 text="+" onClick={() => {}} />}
              >
                <p style={{ margin: 0, fontSize: 14, color: "#64748b" }}>
                  Контент секции
                </p>
              </DashCard>
            </Scope>
          </div>
        }
      />
      <pre className="catalog-code">
{`<DashCard title="Лицензии" headerActions={<BtnPrimaryV4 text="+" />}>
  ...
</DashCard>`}
      </pre>
    </>
  );
}
