import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getUser, putUser } from "../common/Services";
import Button from "../styles/Button";
import Input from "../styles/Input";

export default function UpdatePage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { name, email, password };

  useEffect(() => {
    getUser(userId)
      .then((answer) => {
        console.log(answer);
        setUser(answer.data);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }, []);

  function handleForm(e) {
    e.preventDefault();
    console.log(data);
    putUser(data)
      .then((answer) => {
        const token = answer.data.token;
        const authJSON = JSON.stringify({ token: token });
        localStorage.setItem("drivenplus", authJSON);
        navigate(`/users/${userId}`);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <Wrapper>
      <ion-icon name="arrow-back" onClick={() => navigate(`/home`)}></ion-icon>
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
          background="#EBEBEB"
          placeholder={"CPF"}
          type={"tel"}
          pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
          name={"cpf"}
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
          placeholder={"Senha atual"}
          type={"password"}
          name={"oldPassword"}
        />
        <Input
          width="100%"
          placeholder={"Nova senha"}
          type={"password"}
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" width="100%">
          SALVAR
        </Button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 20vh;
  button {
    margin: 16px auto 24px auto;
  }
  ion-icon {
    position: fixed;
    font-size: 36px;
    top: 3%;
    left: 6%;
    color: #ffffff;
  }
`;
