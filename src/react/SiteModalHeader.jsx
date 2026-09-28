import React from "react";
import { joinClass } from "./utils.js";

export const SiteModalHeader = ({
  title,
  titleId,
  toolbar,
  toolbarWrap = true,
}) => (
  <header className="site-modal-header">
    <h2 className="site-modal-title" id={titleId}>
      {title}
    </h2>
    {toolbar ? (
      <div
        className={joinClass(
          toolbarWrap ? "site-modal-toolbar" : undefined,
        )}
      >
        {toolbar}
      </div>
    ) : null}
  </header>
);
