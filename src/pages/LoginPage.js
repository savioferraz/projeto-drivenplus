import React, { useContext, useState } from "react";
import { postLogin } from "../common/Services";
import { Link, useNavigate } from "react-router-dom";
import Input from "../styles/Input";
import Button from "../styles/Button";
import Logo from "../common/images/Logo.png";
import UserContext from "../common/UserContext";
import styled from "styled-components";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setMembership } = useContext(UserContext);
  const data = { email, password };

  function handleForm(e) {
    e.preventDefault();
    postLogin(data)
      .then((answer) => {
        setMembership(answer.data.membership);
        console.log(answer.data.membership);
        const token = answer.data.token;
        const authJSON = JSON.stringify({ token: token });
        localStorage.setItem("drivenplus", authJSON);
        navigate("/subscriptions");
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <Wrapper>
      <img src={Logo} alt="logo" width="300px" height="50px" />
      <form onSubmit={handleForm}>
        <Input
          width="100%"
          placeholder={"E-mail"}
          type={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          width="100%"
          placeholder={"Senha"}
          type={"password"}
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button width="100%" type="submit" background="#FF4791">
          Entrar
        </Button>
        <Link to="/sign-up">Não tem uma conta? Cadastre-se</Link>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  button {
    margin: 16px auto 24px auto;
  }
  img {
    display: flex;
    align-items: center;
    margin: 100px auto;
  }
`;
