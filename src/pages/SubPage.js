import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getSubscriptionId, postSubscription } from "../common/Services";
import UserContext from "../common/UserContext";
import Button from "../styles/Button";
import ConfirmModal from "../styles/ConfirmModal";
import Input from "../styles/Input";

export default function SubPage() {
  const navigate = useNavigate();
  const { subId } = useParams();
  const { membership, setMembership } = useContext(UserContext);
  const [sub, setSub] = useState([]);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [securityNum, setSecurityNum] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [dialogBox, setDialogBox] = useState(false);
  setMembership(parseInt(subId));
  const membershipId = membership;
  const securityNumber = parseInt(securityNum);
  const data = {
    membershipId,
    cardName,
    cardNumber,
    securityNumber,
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
    postSubscription(data)
      .then((answer) => {
        const token = answer.data.token;
        const authJSON = JSON.stringify({ token: token });
        localStorage.setItem("drivenplus", authJSON);
        navigate("/home");
      })
      .catch((error) => alert(`Opa, algo deu errado... ${error.message}`));
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
        <img src={sub.image} alt="subscription_logo" />
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
      <Form onSubmit={() => setDialogBox(true)}>
        <Input
          width="100%"
          placeholder={"Nome impresso no cartão"}
          type={"text"}
          name={"cardName"}
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <Input
          width="100%"
          placeholder={"Digitos do cartão"}
          type={"text"}
          name={"cardNumber"}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <div>
          <Input
            width="39vw"
            placeholder={"Código de segurança"}
            type={"number"}
            name={"securityNum"}
            value={securityNum}
            onChange={(e) => setSecurityNum(e.target.value)}
          />
          <Input
            width="39vw"
            placeholder={"Validade"}
            type={"text"}
            name={"expirationDate"}
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <Button type="submit" width="100%">
          ASSINAR
        </Button>
      </Form>
      <Button type="submit" width="100%" onClick={() => setDialogBox(true)}>
        MOSTRAR MODAL
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  margin-bottom: 22px;
  text-align: left;

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

const Form = styled.form`
  button {
    margin: 12px auto;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
