import React from "react";
import { joinClass } from "./utils.js";

export const BtnOutlineV4 = ({
  onClick,
  text,
  className,
  type = "button",
  children,
  ...rest
}) => (
  <button
    type={type}
    className={joinClass("btn-outline-v4", className)}
    onClick={onClick}
    {...rest}
  >
    {children ?? text}
  </button>
);
