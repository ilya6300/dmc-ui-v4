import React from "react";
import { DMC_V4_SCOPE_CLASS } from "@dmc/ui-v4";

export function Scope({ children, className = "", style }) {
  return (
    <div
      className={`${DMC_V4_SCOPE_CLASS} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
