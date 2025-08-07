import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const SignUp = ({ setUsername }) => {
  // State to hold the input value for username
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // Handle form submission to set username and navigate to home page
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setUsername(inputValue); // Update username state in App component
    localStorage.setItem("username", inputValue); // Persist username to maintain login state
    navigate("/home"); // Navigate to home page
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
          placeholder="John Doe"
        />
        <button type="submit" disabled={!inputValue.trim()}>
          ENTER
        </button>
      </form>
    </main>
  );
};

export default SignUp;
