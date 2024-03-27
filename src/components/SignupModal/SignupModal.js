import "./SignupModal.css";
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignupModal = ({
  onOpenModal,
  onCloseModal,
  isLoading,
  onUserSignup,
}) => {
  const [formData, setFormData] = useState({
    email: "test2005@gmail.com",
    password: "1234567890",
    username: "test2005",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    username: "",
  });

  // Determine if the signup button should be disabled
  const isSignupButtonDisabled =
    !formData.email || !formData.password || !formData.username;

  const handleAltButtonClick = (e) => {
    onOpenModal("SigninModal");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onUserSignup(formData);
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    // Email validation
    if (!formData.email) {
      formIsValid = false;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors.email = "Invalid email address";
    }
    // Password validation
    if (!formData.password) {
      formIsValid = false;
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      formIsValid = false;
      errors.password =
        "Password is too short. Minimum 8 characters is required";
    }
    //username validation
    if (!formData.username) {
      formIsValid = false;
      errors.username = "Username is required";
    } else if (formData.username.length < 8) {
      formIsValid = false;
      errors.username =
        "Username is too short. Minimum 8 characters is required";
    }
    setFormErrors(errors);
    return formIsValid;
  };

  return (
    <ModalWithForm
      name="signup"
      title={"Sign up"}
      isOpen={onOpenModal}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
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
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="input-field-error">{formErrors.email}</span>
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
              value={formData.password}
              onChange={handleChange}
              required
            />{" "}
            <span className="input-field-error">{formErrors.password}</span>
          </div>
        </label>
      </div>
      <div className="form__field">
        <label>
          Username
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="input-field"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <span className="input-field-error">{formErrors.username}</span>
          </div>
        </label>
      </div>
      <button className="modal__button" disabled={isSignupButtonDisabled}>
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
