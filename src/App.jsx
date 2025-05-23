// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Review from "./pages/Review";
import AddQuiz from "./pages/AddQuiz";
import ListQuizzes from "./pages/ListQuizzes";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PublishQuizzes from "./pages/PublishQuizzes";
import TakeQuiz from "./pages/TakeQuiz";
import QuizAnswer from "./pages/QuizAnswer";
import History from "./pages/History";

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

      {/* Publish Quiz Review */}
      <Route path="PublishQuizzes" element={<PublishQuizzes />} />
      {/* Take Quiz */}
      <Route path="TakeQuiz" element={<TakeQuiz />} />
      {/* Quiz Answer */}
      <Route path="TakeQuiz" element={<TakeQuiz />} />
      <Route path="QuizAnswer" element={<QuizAnswer />} />
      <Route path="History" element={<History />} />
    </Routes>
  );
}

export default App;
