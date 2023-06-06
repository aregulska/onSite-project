import React from "react";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__ctrl">{children}</div>
    </div>
  );
};
