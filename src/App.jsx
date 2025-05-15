// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Review from "./pages/Review";
import AddQuiz from "./pages/AddQuiz";
import ListQuizzes from "./pages/ListQuizzes";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Sign Up and Log In */}
      <Route path="Login" element={<Login />} />
      <Route path="SignUp" element={<SignUp />} />
      {/* Sidebar Nagivation */}

      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Review" element={<Review />} />
      <Route path="AddQuiz" element={<AddQuiz />} />
      <Route path="ListQuizzes" element={<ListQuizzes />} />
    </Routes>
  );
}

export default App;
