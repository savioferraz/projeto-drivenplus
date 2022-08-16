import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { putUser } from "../common/Services";
import Button from "../styles/Button";
import Input from "../styles/Input";

export default function UpdatePage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const data = { name, email, currentPassword };
  const userData = JSON.parse(localStorage.getItem("drivenplususer"));
  const cpf = userData.userData.cpf;
  console.log(cpf);

  function handleForm(e) {
    e.preventDefault();
    console.log(data);
    putUser(data)
      .then(() => {
        navigate(`/users/${userId}`);
      })
      .catch((error) => {
        console.log(error.response);
        alert(`Opa, algo deu errado... ${error.message}`);
      });
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
          placeholder={cpf}
          name={"cpf"}
          value={cpf}
          disabled
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
          name={"currentPassword"}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Input
          width="100%"
          placeholder={"Nova senha"}
          type={"password"}
          name={"password"}
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
