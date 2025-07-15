import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/login/LogIn';
import ForgotPassword from './components/login/ForgotPassword';

function App() {
  return (
    <BrowserRouter basename="/account">
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
