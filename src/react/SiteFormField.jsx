import React from "react";
import { joinClass } from "./utils.js";

export const SiteFormField = ({
  label,
  full,
  className,
  children,
  as = "label",
}) => {
  const Tag = as;
  return (
    <Tag
      className={joinClass(
        "site-form-field",
        full && "site-form-field--full",
        className,
      )}
    >
      {label ? <span className="site-form-label">{label}</span> : null}
      {children}
    </Tag>
  );
};
