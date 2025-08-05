import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";

function App() {
  const [username, setUsername] = useState("");
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
