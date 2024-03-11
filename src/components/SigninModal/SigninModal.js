import "./SigninModal.css";
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SigninModal = ({ onOpenModal, onCloseModal, isLoading, onUserLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  // Determine if the signin button should be disabled
  const isSigninButtonDisabled = !formData.email || !formData.password;

  const handleAltButtonClick = () => {
    onOpenModal("SignupModal");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    console.log(e.target.elements[0].value);
    if (validateForm()) {
      // Submit form data and close modal
      onUserLogin(e.target.elements[0].value, e.target.elements[1].value);
      onCloseModal();
    }
  };

  return (
    <ModalWithForm
      name="signin"
      title={"Sign in"}
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
            />
            <span className="input-field-error">{formErrors.password}</span>
          </div>
        </label>
      </div>
      <button className="modal__button" disabled={isSigninButtonDisabled}>
        {isLoading ? "SigningIn..." : "Sign in"}
      </button>
      <button className="modal__alt-button" onClick={handleAltButtonClick}>
        {isLoading ? "Submtting..." : "or Sign up"}
      </button>
    </ModalWithForm>
  );
};

export default SigninModal;
