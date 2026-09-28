import React from "react";
import { joinClass } from "./utils.js";

export const DashCard = ({
  className,
  title,
  headerClassName,
  headerActions,
  children,
}) => (
  <div className={joinClass("card", "dash-card", className)}>
    {title ? (
      <div className={joinClass("dash-card-header", headerClassName)}>
        <span className="dash-card-title">{title}</span>
        {headerActions}
      </div>
    ) : null}
    {children}
  </div>
);
