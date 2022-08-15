import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./common/UserContext";
import SubsListPage from "./pages/SubsListPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyles";
import SubPage from "./pages/SubPage";

export default function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/subscriptions/" element={<SubsListPage />} />
          <Route path="/subscriptions/:subId" element={<SubPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
