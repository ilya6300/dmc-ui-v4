import React from "react";

export function CcV4Toggle({
  active,
  label,
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type="button"
      className={`cc-v4-toggle-wrapper${className ? ` ${className}` : ""}`}
      onClick={(e) => {
        e.preventDefault();
        if (!disabled) {
          onClick?.(e);
        }
      }}
      aria-pressed={!!active}
      disabled={disabled}
    >
      <span
        className={`cc-v4-toggle${active ? " cc-v4-toggle--on" : ""}`}
        aria-hidden="true"
      />
      {label ? <span className="cc-v4-toggle-label">{label}</span> : null}
    </button>
  );
}
