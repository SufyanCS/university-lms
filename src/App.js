import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Teacher from './pages/Teacher';
import StudentDashboard from './pages/Student';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/Student" element={<StudentDashboard />} />
        <Route path="/Admin" element={<Admin />} />




      </Routes>
    </Router>
  );
}

export default App;
