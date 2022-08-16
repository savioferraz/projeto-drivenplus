import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SubCard({ subId, image, price }) {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/subscriptions/${subId}`)}>
      <img src={image} alt="" />
      <p>R$ {price}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 290px;
  height: 180px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
  background: #0e0e13;
  margin: 10px auto;
  padding: 16px;
  text-align: center;
  img {
    height: 95px;
    width: 139px;
  }
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
`;
