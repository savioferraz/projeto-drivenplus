import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./common/UserContext";
import SubsScreen from "./screens/SubsScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyle from "./styles/GlobalStyles";

export default function App() {
  const [membership, setMembership] = useState(null);

  return (
    <UserContext.Provider value={{ membership, setMembership }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
          <Route path="/subscriptions" element={<SubsScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
