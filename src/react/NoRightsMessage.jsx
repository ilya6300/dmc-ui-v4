import React from "react";

export const NoRightsMessage = ({ children, variant = "text" }) => {
  if (variant === "panel") {
    return (
      <div className="flex_center tabs_lgt_grey_border">{children}</div>
    );
  }
  return <p className="no_right_text">{children}</p>;
};
