import "./SignupModal.css";
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignupModal = ({ onOpenModal, onCloseModal, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAltButtonClick = (e) => {
    onOpenModal("SigninModal");
  };

  const enabled =
    email.length > 0 && password.length > 0 && username.length > 0;

  return (
    <ModalWithForm
      name="signup"
      title={"Sign up"}
      isOpen={onOpenModal}
      onClose={onCloseModal}
    >
      <div className="form__field">
        <label>
          Email
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
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
              placeholder="Enter password"
              className="input-field"
              value={password}
              onChange={handlePasswordChange}
              required
            ></input>
          </div>
        </label>
      </div>
      <div className="form__field">
        <label>
          Username
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your username"
              className="input-field"
              value={username}
              onChange={handleUsernameChange}
              required
            ></input>
          </div>
        </label>
      </div>
      <button className="modal__button" disabled={!enabled}>
        {isLoading ? "SigningUp..." : "Sign up"}
      </button>
      <button
        className="modal__alt-button"
        onClick={handleAltButtonClick}
        type="button"
      >
        {isLoading ? "Submtting..." : "or Sign in"}
      </button>
    </ModalWithForm>
  );
};

export default SignupModal;
