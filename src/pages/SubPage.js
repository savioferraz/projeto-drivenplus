import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getSubscriptionId, postSubscription } from "../common/Services";
import Button from "../styles/Button";
import ConfirmModal from "../styles/ConfirmModal";
import Input from "../styles/Input";

export default function SubPage() {
  const navigate = useNavigate();
  const { subId } = useParams();
  const [sub, setSub] = useState([]);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [securityNumber, setSecurityNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [dialogBox, setDialogBox] = useState(false);
  const membershipId = parseInt(subId);
  const securityNum = parseInt(securityNumber);
  const data = {
    membershipId,
    cardName,
    cardNumber,
    securityNum,
    expirationDate,
  };

  useEffect(() => {
    getSubscriptionId(subId)
      .then((answer) => {
        setSub(answer.data);
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }, []);

  function handleForm(e) {
    e.preventDefault();
    console.log(data);
    // postSubscription(data)
    //   .then((answer) => {
    //     const token = answer.data.token;
    //     const authJSON = JSON.stringify({ token: token });
    //     localStorage.setItem("drivenplus", authJSON);
    //     navigate("/");
    //   })
    //   .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
  }

  return (
    <Wrapper>
      {dialogBox ? (
        <ConfirmModal
          name={sub.name}
          price={sub.price}
          cancel={() => setDialogBox(false)}
          confirm={handleForm}
        ></ConfirmModal>
      ) : (
        <></>
      )}
      <ion-icon
        name="arrow-back"
        onClick={() => navigate(`/subscriptions`)}
      ></ion-icon>
      <div>
        <img src={sub.image} />
        <h1>{sub.name}</h1>
      </div>

      <Info>
        <div>
          <ion-icon name="clipboard-outline"></ion-icon> <span>Benefícios</span>
        </div>
        <ul>
          {sub.length === 0 ? (
            <>Carregando benefícios...</>
          ) : (
            sub.perks.map((perk, index) => (
              <li>
                {index + 1}. {perk.title}
              </li>
            ))
          )}
        </ul>
        <div>
          <ion-icon name="cash-outline"></ion-icon> <span>Preço:</span>
        </div>
        <p>R$ {sub.price} cobrados mensalmente</p>
      </Info>
      <CardForm onSubmit={() => setDialogBox(true)}>
        <Input
          placeholder={"Nome impresso no cartão"}
          type={"text"}
          name={"cardName"}
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <Input
          placeholder={"Digitos do cartão"}
          type={"text"}
          name={"cardNumber"}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div>
          <Input
            placeholder={"Código de segurança"}
            type={"number"}
            name={"securityNumber"}
            value={securityNumber}
            onChange={(e) => setSecurityNumber(e.target.value)}
          />
          <Input
            placeholder={"Validade"}
            type={"text"}
            name={"expirationDate"}
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <Button type="submit">ASSINAR</Button>
      </CardForm>
      <Button type="submit" onClick={() => setDialogBox(true)}>
        ASSINAR
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin: 12px auto;
  }
  ion-icon {
    position: fixed;
    font-size: 36px;
    top: 3%;
    left: 6%;
    color: #ffffff;
  }
  img {
    margin-top: 10vh;
    height: 95px;
    width: 139px;
  }
`;

const Info = styled.div`
  width: 85vw;
  margin-bottom: 34px;
  ul {
    margin: 9px auto;
    padding-left: 10px;
  }
  li {
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
  div {
    color: #ffffff;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 5px;
  }
  p {
    font-size: 14px;
    line-height: 16px;
    padding-left: 10px;
  }
  ion-icon {
    position: inherit;
    font-size: 18px;
    color: #ff4791;
    margin-right: 3px;
  }
`;

const CardForm = styled.form`
  width: 80vw;
  div {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    margin: auto 4px;
  }
`;
