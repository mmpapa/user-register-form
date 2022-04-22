import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UerProfileRegisterPage  from "./pages/UerProfileRegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/" element={<UerProfileRegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
