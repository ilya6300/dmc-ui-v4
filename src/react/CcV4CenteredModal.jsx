import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { joinClass } from "./utils.js";

const SCOPE_CLASS = "dmc-v4 company-card-v4";

export const CcV4CenteredModal = ({
  children,
  onClose,
  ariaLabelledBy,
  className,
  modalClassName,
}) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!onClose) {
      return undefined;
    }
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (onClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={joinClass(SCOPE_CLASS, "cc-v4-centered-modal-root", className)}
      role="presentation"
      onClick={handleBackdropClick}
    >
      <section
        className={joinClass(
          "card",
          "site-modal",
          "cc-v4-centered-modal",
          modalClassName,
        )}
        aria-labelledby={ariaLabelledBy}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </section>
    </div>,
    document.body,
  );
};
