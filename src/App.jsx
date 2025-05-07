// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterandLogin from './pages/RegisterandLogin';
import Login from './components/registerPage/Login';

import Dashboard from './pages/Dashboard';
import Review from './pages/Review';

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
    </Routes>
  );
}

export default App;