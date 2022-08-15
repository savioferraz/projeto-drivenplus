import styled from "styled-components";
import Button from "./Button";

export default function ConfirmModal({ name, price, confirm, cancel }) {
  return (
    <Wrapper>
      <ion-icon name="close-circle" onClick={cancel}></ion-icon>
      <Box>
        <p>
          Tem certeza que deseja assinar o plano {name} por R$ {price}?
        </p>
        <div>
          <Button background="#CECECE" width="95px" onClick={cancel}>
            Não
          </Button>
          <Button width="95px" onClick={confirm}>
            SIM
          </Button>
        </div>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  ion-icon {
    position: fixed;
    font-size: 36px;
    top: 3%;
    right: 6%;
    color: #ffffff;
  }
`;

const Box = styled.div`
  width: 248px;
  height: 210px;
  background: #ffffff;
  border-radius: 12px;
  p {
    color: #000000;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin: 33px 22px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;
