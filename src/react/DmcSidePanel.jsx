import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { joinClass } from "./utils.js";

const SCOPE_CLASS = "dmc-v4 company-card-v4";

/**
 * Правая боковая панель (drawer) в стиле v4 — аналог subscription-drawer в dmc-lk.
 */
export const DmcSidePanel = ({
  open,
  onClose,
  title,
  titleId = "dmc-side-panel-title",
  header,
  footer,
  actions,
  children,
  backdrop = true,
  closeOnBackdrop = true,
  panelWidth = "min(92vw, 720px)",
  className,
  panelClassName,
}) => {
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !onClose) {
      return undefined;
    }
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleBackdropClick = () => {
    if (closeOnBackdrop && onClose) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={joinClass(
        "dmc-side-panel-root",
        backdrop && "dmc-side-panel-root--interactive",
        className,
      )}
      role="presentation"
    >
      {backdrop ? (
        <div
          className="dmc-side-panel-backdrop"
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      ) : null}
      <div
        className={joinClass(SCOPE_CLASS, "posi-abs", "subscription-drawer-v4", panelClassName)}
        style={{ width: panelWidth, maxWidth: panelWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="subscription-drawer-layout">
          <section
            className="subscription-drawer-main site-modal"
            aria-labelledby={titleId}
          >
            {header ?? (
              <header className="site-modal-header">
                <h2 className="site-modal-title" id={titleId}>
                  {title}
                </h2>
              </header>
            )}
            <div className="site-modal-body">{children}</div>
            {footer ? <footer className="site-modal-footer">{footer}</footer> : null}
          </section>
          {actions ? (
            <div className="subscription-drawer-actions">{actions}</div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
};
