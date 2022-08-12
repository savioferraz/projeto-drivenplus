import React from "react";
import styled from "styled-components";

export default function Button({
  children,
  width = "80%",
  height = "52px",
  background = "rgba(255, 71, 145, 1)",
  onClick,
}) {
  return (
    <Wrapper
      height={height}
      width={width}
      background={background}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 8px;
  font-size: 21px;
  line-height: 26px;
  border: none;
  text-align: center;
  color: #ffffff;
  margin: 3px auto;
`;
