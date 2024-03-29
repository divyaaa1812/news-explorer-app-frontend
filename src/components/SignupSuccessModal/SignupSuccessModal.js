import "./SignupSuccessModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignupSuccessModal = ({ onOpenModal, onCloseModal }) => {
  return (
    <ModalWithForm
      name="signupsuccess"
      title={"Registration successfully completed!"}
      isOpen={onOpenModal}
      onClose={onCloseModal}
    >
      <button
        className="modal__button modal-success-button"
        onClick={() => onOpenModal("SigninModal")}
      >
        Sign in
      </button>
    </ModalWithForm>
  );
};

export default SignupSuccessModal;
