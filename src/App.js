import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Authenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import UerProfileRegisterPage  from "./pages/UerProfileRegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import './App.css';

function App() {
  return (
    <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}> 
    {({signOut, user}) =>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/" element={<UerProfileRegisterPage />} />
        </Routes>
        <button onClick={signOut}>Sign out</button>
      </BrowserRouter>
      
    }
    </Authenticator>
  );
}

export default App;
