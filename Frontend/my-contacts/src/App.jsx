import UserLogin from "./Components/UserLogin"
import RegisterUser from "./Components/RegisterUser"
import Contacts from "./Components/Contacts"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {
 

  return (

    <Router>
      <Routes>
      <Route path="/" element={<UserLogin/>} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/contacts" element={<Contacts />} />

      </Routes>
    </Router>
  )
}

export default App
