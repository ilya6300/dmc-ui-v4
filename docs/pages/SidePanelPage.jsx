import React, { useState } from "react";
import {
  BtnOutlineV4,
  BtnPrimaryV4,
  DmcSidePanel,
  SiteFormField,
} from "@dmc/ui-v4";
import { DocFigure } from "../components/DocFigure.jsx";
import { Scope } from "../components/Scope.jsx";

export default function SidePanelPage() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h2>Боковая панель (справа)</h2>
      <p className="catalog-lead">
        <code>DmcSidePanel</code> — drawer как у подписки/лицензий в dmc-lk:{" "}
        <code>posi-abs subscription-drawer-v4</code>, опциональный backdrop, Escape,
        слоты body / footer / actions.
      </p>
      <DocFigure
        previewSrc="/previews/side-panel.svg"
        alt="Превью боковой панели"
        preview={
          <div className="catalog-preview">
            <Scope style={{ flexDirection: "row" }}>
              <BtnPrimaryV4 text="Открыть панель" onClick={() => setOpen(true)} />
            </Scope>
            <DmcSidePanel
              open={open}
              onClose={() => setOpen(false)}
              title="Редактирование подписки"
              footer={
                <>
                  <BtnOutlineV4 text="Отмена" onClick={() => setOpen(false)} />
                  <BtnPrimaryV4 text="Сохранить" onClick={() => setOpen(false)} />
                </>
              }
              actions={
                <>
                  <BtnOutlineV4 text="Действие 1" onClick={() => {}} />
                  <BtnPrimaryV4 text="Действие 2" onClick={() => {}} />
                </>
              }
            >
              <div className="site-modal-fields">
                <SiteFormField label="Период">
                  <input className="site-form-control" type="text" />
                </SiteFormField>
              </div>
            </DmcSidePanel>
          </div>
        }
      />
      <pre className="catalog-code">
{`<DmcSidePanel
  open={open}
  onClose={close}
  title="Заголовок"
  backdrop
  footer={<><BtnOutlineV4 /><BtnPrimaryV4 /></>}
  actions={...}
>
  ...
</DmcSidePanel>`}
      </pre>
    </>
  );
}
