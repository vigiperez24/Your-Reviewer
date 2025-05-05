// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegisterandLogin from './pages/RegisterandLogin';
import Login from './components/registerPage/Login';



import './index.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Register" element={<RegisterandLogin />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  );
}

export default App;