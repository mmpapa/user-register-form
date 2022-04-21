import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EditProfile  from "./ui-components/EditProfile";
import ProfileA from "./ui-components/ProfileA";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfileA />} />
        <Route path="/" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
