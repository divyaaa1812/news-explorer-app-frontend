import "./ModalWithForm.css";

const ModalWithForm = ({ name, children, title, onSubmit, onClose }) => {
  return (
    <div className={`modal modal_${name}`}>
      <div className="modal__content">
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
