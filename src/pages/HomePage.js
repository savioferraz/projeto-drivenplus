import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../common/UserContext";

export default function HomePage() {
  const { membership } = useContext(UserContext);
  console.log(membership);

  return membership === null ? (
    <p>
      Você não possui nenhuma assinatura ativa. <bl>Redirecionando...</bl>
    </p>
  ) : (
    <p>contem assinatura</p>
  );
}
