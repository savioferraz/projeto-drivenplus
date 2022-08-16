import React, { useState } from "react";
import { postSignUp } from "../common/Services";
import { Link, useNavigate } from "react-router-dom";
import Input from "../styles/Input";
import Button from "../styles/Button";
import styled from "styled-components";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { name, cpf, email, password };

  function handleForm(e) {
    e.preventDefault();
    console.log(data);
    postSignUp(data)
      .then((answer) => {
        const token = answer.data.token;
        const authJSON = JSON.stringify({ token: token });
        localStorage.setItem("drivenplus", authJSON);
        navigate("/");
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <Wrapper>
      <form onSubmit={handleForm}>
        <Input
          width="100%"
          placeholder={"Nome"}
          type={"text"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          width="100%"
          placeholder={"CPF"}
          type={"tel"}
          pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
          name={"cpf"}
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
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
        <Button type="submit" width="100%">
          Cadastrar
        </Button>
      </form>
      <Link to="/">Já possui uma conta? Entre</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 20vh;
  button {
    margin: 16px auto 24px auto;
  }
`;
