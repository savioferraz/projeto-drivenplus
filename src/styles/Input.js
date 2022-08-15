import React from "react";
import styled from "styled-components";

export default function Input({ placeholder, type, name, value, onChange }) {
  return (
    <Wrapper
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
    ></Wrapper>
  );
}

const Wrapper = styled.input`
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  margin: 3px auto;
`;
