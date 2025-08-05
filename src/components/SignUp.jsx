import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const SignUp = ({ setUsername }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setUsername(inputValue); // Username value will be stored
    navigate("/home");
  };

  return (
    <main className="signup-container">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h1>Welcome to CodeLeap Network!</h1>
        <label htmlFor="username">Please enter your username</label>
        <input
          type="text"
          id="username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Your username"
        />
        <button type="submit" disabled={!inputValue.trim()}>
          Enter
        </button>
      </form>
    </main>
  );
};

export default SignUp;
