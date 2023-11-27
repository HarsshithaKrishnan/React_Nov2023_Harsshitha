import './App.css';
import React from 'react';
import LoginPage from './component/LoginPage';
import Register from './component/Register';
import Homepage from './component/Homepage';
import Hotels from './component/Hotels';
import Destination from './component/Destination';
import Vacation from './component/Vacation';
import Aboutus from './component/Aboutus';
import Contact from './component/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Set the default route to the Login page */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registration" element={<Register />} />
          <Route path="/h" element={<Homepage />} />
          <Route path="/ho" element={<Hotels />} />
          <Route path="/De" element={<Destination />} />
          <Route path="/Va" element={<Vacation />} />
          <Route path="/ab" element={<Aboutus />} />
          <Route path="/ca" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;