import React from "react";

export const BtnPrimaryV4 = ({ onClick, text, footerSize, compact, className, children, type = "button", ...rest }) => {
  const useCompactAction = !(footerSize || compact);
  const classes = [
    "btn-primary-v4",
    useCompactAction ? "sub-status-action-btn" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children ?? text ?? "Добавить"}
    </button>
  );
};

/** @deprecated use BtnPrimaryV4 */
export const BtnPrimaryv4 = BtnPrimaryV4;
