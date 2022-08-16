import React from "react";
import styled from "styled-components";

export default function Input({
  width,
  placeholder,
  type,
  name,
  value,
  onChange,
  disabled = false,
  background = "#ffffff",
}) {
  return (
    <Wrapper
      width={width}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      background={background}
      disabled={disabled}
    ></Wrapper>
  );
}

const Wrapper = styled.input`
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  margin: 6px auto;
`;
