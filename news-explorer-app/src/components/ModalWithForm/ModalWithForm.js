import "./ModalWithForm.css";
import React, { useEffect, useRef } from "react";

const ModalWithForm = ({ name, children, title, onClose, onSubmit }) => {
  const modalRef = useRef(null);

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
        <form className="form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
