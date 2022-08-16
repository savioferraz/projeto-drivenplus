import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../common/UserContext";
import Button from "../styles/Button";
import { cancelSub } from "../common/Services";

export default function HomePage() {
  const navigate = useNavigate();
  const { userId, membership } = useContext(UserContext);
  const userData = JSON.parse(localStorage.getItem("drivenplususer"));
  const membershipData = JSON.parse(
    localStorage.getItem("drivenplusmembership")
  );
  console.log(userData);
  console.log(membershipData);
  console.log(userId);

  function unsubscribe() {
    cancelSub()
      .then(() => {
        alert("Assinatura cancelada com sucesso");
        navigate(`/subscriptions`);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return membership === null ? (
    () => navigate(`/subscriptions`)
  ) : (
    <Wrapper>
      <ion-icon
        name="person-circle"
        onClick={() => navigate(`/users/${userId}`)}
      ></ion-icon>
      <img src={membershipData.membershipData.image} alt="logo" />
      <h1>Olá, {userData.userData.name}</h1>
      <Perks>
        {membershipData.membershipData.perks.map((perk) => (
          <Button width="100%" key={perk.id}>
            {perk.title}
          </Button>
        ))}
      </Perks>
      <Bottom>
        <Button width="100%" onClick={() => navigate(`/subscriptions`)}>
          Mudar plano
        </Button>
        <Button width="100%" background="#FF4747" onClick={unsubscribe}>
          Cancelar plano
        </Button>
      </Bottom>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ion-icon {
    position: fixed;
    font-size: 36px;
    top: 3%;
    right: 6%;
    color: #ffffff;
  }
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 13px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  img {
    height: 50px;
  }
`;

const Perks = styled.div`
  margin: 40px auto;
`;

const Bottom = styled.footer`
  width: 80vw;
  position: absolute;
  bottom: 15px;
`;
