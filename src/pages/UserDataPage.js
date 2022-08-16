import React from "react";
import { Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";

const auth = JSON.parse(localStorage.getItem("drivenplus"));
console.log(auth);

export default function UserDataPage() {
  auth ? <Navigate to="/home" /> : <LoginPage />;
}
