import React from "react";
import { joinClass } from "./utils.js";

export const ReqItem = ({ label, value, muted, mono, className }) => (
  <div className={joinClass("req-item", className)}>
    <span className="req-label">{label}</span>
    <span
      className={joinClass(
        "req-value",
        muted && "req-value-muted",
        mono && "dmc-v4-mono company-card-v4-mono",
      )}
    >
      {value}
    </span>
  </div>
);
