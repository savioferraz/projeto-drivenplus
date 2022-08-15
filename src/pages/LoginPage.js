import React, { useContext, useState } from "react";
import { postLogin } from "../common/Services";
import { Link, useNavigate } from "react-router-dom";
import Input from "../styles/Input";
import Button from "../styles/Button";
import Logo from "../common/images/Logo.png";
import UserContext from "../common/UserContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setMembership } = useContext(UserContext);
  const data = { email, password };

  function handleForm(e) {
    e.preventDefault();
    postLogin(data).then((answer) => {
      setMembership(answer.data.membership);
      console.log(answer.data.membership);
      const token = answer.data.token;
      const authJSON = JSON.stringify({ token: token });
      localStorage.setItem("drivenplus", authJSON);
      navigate("/subscriptions");
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
          s
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
        <Button type="submit" background="#FF4791">
          Entrar
        </Button>
        <Link to="/sign-up">Não tem uma conta? Cadastre-se</Link>
      </form>
    </>
  );
}
