import React from "react";
import { BtnOutlineV4, BtnPrimaryV4 } from "@dmc/ui-v4";
import { DocFigure } from "../components/DocFigure.jsx";
import { Scope } from "../components/Scope.jsx";

export default function ButtonsPage() {
  return (
    <>
      <h2>Кнопки</h2>
      <p className="catalog-lead">
        Primary и outline для основных действий. Минимальная ширина в footer модалок — 87px.
      </p>
      <DocFigure
        previewSrc="/previews/buttons.svg"
        alt="Превью кнопок v4"
        preview={
          <div className="catalog-preview catalog-preview--canvas">
            <Scope style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
              <BtnPrimaryV4 text="Сохранить" onClick={() => {}} />
              <BtnOutlineV4 text="Отмена" onClick={() => {}} />
            </Scope>
          </div>
        }
      />
      <pre className="catalog-code">
{`<BtnPrimaryV4 text="Сохранить" onClick={save} />
<BtnOutlineV4 text="Отмена" onClick={onClose} />`}
      </pre>
    </>
  );
}
