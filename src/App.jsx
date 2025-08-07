import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";

function App() {
  // State to hold the username
  const [username, setUsername] = useState("");
  // Retrieve username from localStorage on component mount (maintain login state after refresh)
  const storedUsername = localStorage.getItem("username");

  //Update username state if found in localStorage
  useEffect(() => {
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp setUsername={setUsername} />} />
        <Route path="/home" element={<Home username={username} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
