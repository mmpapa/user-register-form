import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Authenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import UerProfileRegisterPage  from "./pages/UerProfileRegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import Mappp from "./pages/Mappp";

import './App.css';

function App() {
  return (
    <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}> 
    {({signOut, user}) =>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<Mappp />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/" element={<UerProfileRegisterPage />} />
        </Routes>
      </BrowserRouter>
      <button onClick={signOut}>Sign out</button>
      </div>
      
    }
    </Authenticator>
  );
}

export default App;
