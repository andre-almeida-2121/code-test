import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    localStorage.setItem("username", username.trim());
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your username"
        />
        <button type="submit" disabled={!username.trim()}>
          Enter
        </button>
      </form>
    </main>
  );
}

export default SignUp;
