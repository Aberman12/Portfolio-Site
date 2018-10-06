import React from "react";
import resume from "./png/Alexander-Berman-Resume-1.png";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <img
          className="resume-resume2"
          onClick={handleClose}
          src={resume}
          alt="resume"
        />
      </section>
    </div>
  );
};

export default Modal;
