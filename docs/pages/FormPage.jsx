import React from "react";
import { SiteFormField } from "@dmc/ui-v4";
import { DocFigure } from "../components/DocFigure.jsx";
import { Scope } from "../components/Scope.jsx";

export default function FormPage() {
  return (
    <>
      <h2>Форма</h2>
      <p className="catalog-lead">
        <code>SiteFormField</code> + <code>site-form-control</code>. Focus border —{" "}
        <code>--main-blue-1</code>.
      </p>
      <DocFigure
        previewSrc="/previews/form.svg"
        alt="Превью поля формы"
        preview={
          <div className="catalog-preview">
            <Scope className="site-modal-fields">
              <SiteFormField label="Название площадки">
                <input
                  className="site-form-control"
                  type="text"
                  placeholder="Склад №1"
                />
              </SiteFormField>
            </Scope>
          </div>
        }
      />
      <pre className="catalog-code">
{`<SiteFormField label="Название">
  <input className="site-form-control" />
</SiteFormField>`}
      </pre>
    </>
  );
}
