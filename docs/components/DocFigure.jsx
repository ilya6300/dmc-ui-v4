import React from "react";

export function DocFigure({ preview, previewSrc, alt, children }) {
  return (
    <div className="catalog-figure">
      <div>{preview}</div>
      {previewSrc ? (
        <figure>
          <img src={previewSrc} alt={alt || ""} width={200} height={120} />
        </figure>
      ) : null}
      {children}
    </div>
  );
}
