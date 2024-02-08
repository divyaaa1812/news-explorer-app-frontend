import "./SigninModal.css";
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SigninModal = ({ onOpenModal, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAltClick = (e) => {
    onOpenModal("SignupModal");
  };

  const enabled = email.length > 0 && password.length > 0;

  return (
    <ModalWithForm name="signin" title={"Sign in"} isOpen={onOpenModal}>
      <div className="form__field">
        <label>
          Email
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="input-field"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
        </label>
      </div>
      <div className="form__field">
        <label>
          Password
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="input-field"
              value={password}
              onChange={handlePasswordChange}
              required
            ></input>
          </div>
        </label>
      </div>
      <button className="modal__button" disabled={!enabled}>
        {isLoading ? "SigningIn..." : "Sign in"}
      </button>
      <button
        className="modal__alt-button"
        onClick={handleAltClick}
        type="button"
      >
        {isLoading ? "Submtting..." : "or Sign up"}
      </button>
    </ModalWithForm>
  );
};

export default SigninModal;
