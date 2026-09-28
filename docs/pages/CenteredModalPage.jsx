import React, { useState } from "react";
import {
  BtnOutlineV4,
  BtnPrimaryV4,
  CcV4CenteredModal,
  SiteModalHeader,
} from "@dmc/ui-v4";
import { DocFigure } from "../components/DocFigure.jsx";
import { Scope } from "../components/Scope.jsx";

export default function CenteredModalPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h2>Модалка по центру</h2>
      <p className="catalog-lead">
        Portal, затемнение фона, Escape и клик по backdrop. Для подтверждений и форм в
        админке.
      </p>
      <DocFigure
        previewSrc="/previews/centered-modal.svg"
        alt="Превью центрированной модалки"
        preview={
          <div className="catalog-preview">
            <Scope style={{ flexDirection: "row" }}>
              <BtnPrimaryV4 text="Открыть модалку" onClick={() => setOpen(true)} />
            </Scope>
            {open ? (
              <CcV4CenteredModal
                ariaLabelledBy="demo-modal-title"
                onClose={() => setOpen(false)}
              >
                <SiteModalHeader title="Подтверждение" titleId="demo-modal-title" />
                <p style={{ margin: 0, fontSize: 14, color: "#64748b" }}>
                  Пример текста в центрированной модалке.
                </p>
                <footer className="site-modal-footer">
                  <BtnOutlineV4 text="Отмена" onClick={() => setOpen(false)} />
                  <BtnPrimaryV4 text="ОК" onClick={() => setOpen(false)} />
                </footer>
              </CcV4CenteredModal>
            ) : null}
          </div>
        }
      />
      <pre className="catalog-code">
{`<CcV4CenteredModal onClose={close} ariaLabelledBy="title-id">
  <SiteModalHeader title="..." titleId="title-id" />
  <footer className="site-modal-footer">...</footer>
</CcV4CenteredModal>`}
      </pre>
    </>
  );
}
