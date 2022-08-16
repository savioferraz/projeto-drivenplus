import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getUser } from "../common/Services";
import Button from "../styles/Button";
import Input from "../styles/Input";

export default function UserPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser(userId)
      .then((answer) => {
        console.log(answer);
        setUser(answer.data);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }, []);

  return (
    <Wrapper>
      <ion-icon name="arrow-back" onClick={() => navigate(`/home`)}></ion-icon>
      <form>
        <Input
          width="100%"
          background="#EBEBEB"
          placeholder={"Nome"}
          readonly
        />
        <Input width="100%" background="#EBEBEB" placeholder={"CPF"} readonly />
        <Input
          width="100%"
          background="#EBEBEB"
          placeholder={"E-mail"}
          readonly
        />
        <Button
          type="submit"
          width="100%"
          onClick={() => navigate(`/users/${userId}/update`)}
        >
          ATUALIZAR
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
