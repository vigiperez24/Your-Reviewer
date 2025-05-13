// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterandLogin from './pages/RegisterandLogin';
import Login from './components/registerPage/Login';
import Review from './pages/Review';
import AddQuiz from './pages/AddQuiz';
import ListQuizzes from './pages/ListQuizzes';


import Dashboard from './pages/Dashboard';


import './index.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Register" element={<RegisterandLogin />} />
      <Route path="Login" element={<Login />} />

      {/* Sidebar Nagivation */}
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Review" element={<Review />} />
      <Route path="AddQuiz" element={<AddQuiz />} />
      <Route path="ListQuizzes" element={<ListQuizzes />} />

    </Routes>
  );
}

export default App;