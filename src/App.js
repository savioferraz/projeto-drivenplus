import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./common/UserContext";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import GlobalStyle from "./styles/GlobalStyles";

export default function App() {
  return (
    <UserContext.Provider value={{}}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />

          <Route path="/sign-up" element={<SignUpScreen />} />

          {/* <Route path="/subscriptions" element={<SubscriptionScreen />} />
          <Route path="/home" element={<HomeScreen />} /> */}
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
