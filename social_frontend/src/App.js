
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/pages/LoginPage';
import Home from './components/pages/HomePage';
import Signup from './components/pages/Signup';
import OTP_submit from './components/pages/OTP_submit';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/login' element={<Login />} />
        <Route path='/submit-otp' element={<OTP_submit />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
