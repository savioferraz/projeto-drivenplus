import React, { useState } from "react";
import { postSignUp } from "../common/Services";
import { Link, useNavigate } from "react-router-dom";
import Input from "../common/Input";
import Button from "../common/Button";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const data = { email, name, cpf, password };

  function handleForm(e) {
    e.preventDefault();
    console.log(data);
    postSignUp(data).then(() => navigate("/"));
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <Input
          placeholder={"Nome"}
          type={"text"}
          name={"name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder={"CPF"}
          type={"number"}
          name={"cpf"}
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
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
        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/">Já possui uma conta? Entre</Link>
    </>
  );
}
