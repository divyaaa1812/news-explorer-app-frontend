import "./ModalWithForm.css";
import React, { useEffect, useRef, useState } from "react";

const ModalWithForm = ({ name, children, title, onClose }) => {
  const modalRef = useRef(null);

  //To close modal when click outside modal window
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className={`modal modal_${name}`}>
      <div ref={modalRef} className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="modal__header-title">{title}</h3>
        <form className="form">{children}</form>
      </div>
    </div>
  );
};

export default ModalWithForm;
