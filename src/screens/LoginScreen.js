import React, { useState } from "react";
import { postLogin } from "../common/Services";
import { Link, useNavigate } from "react-router-dom";
import Input from "../common/Input";
import Logo from "../common/images/Logo.png";
import Button from "../common/Button";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { email, password };

  function handleForm(e) {
    e.preventDefault();
    console.log(data);
    postLogin(data).then((res) => {
      const token = res.data.token;
      const authJSON = JSON.stringify({ token: token });
      localStorage.setItem("drivenplus", authJSON);
      navigate("/home");
    });
  }

  return (
    <>
      <img src={Logo} alt="logo" />
      <form onSubmit={handleForm}>
        <Input
          placeholder={"E-mail"}
          type={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder={"Senha"}
          type={"password"}
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
        <Link to="/sign-up">Não tem uma conta? Cadastre-se</Link>
      </form>
    </>
  );
}
