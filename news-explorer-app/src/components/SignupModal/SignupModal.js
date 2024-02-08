import "./SignupModal.css";

const SignupModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleAltClick = (e) => {
    onOpenModal("SignupModal");
  };

  return (
    <ModalWithForm name="signup" title={"Sign up"} isOpen={onOpenModal}>
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
        onClick={handleAltClick}
        type="button"
      >
        {isLoading ? "Submtting..." : "or Sign in"}
      </button>
    </ModalWithForm>
  );
};

export default SignupModal;
