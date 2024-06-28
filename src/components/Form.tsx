import React from "react";
import styled from "styled-components";

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: solid 1px #f15186;
  width: 40%;
  padding-bottom: 4px;
  color: #fff !important;
  font-weight: lighter;
  letter-spacing: 2px;
  margin-bottom: 30px;
  margin-right: 20px;
  font-size: 20px;
`;

const Button = styled.button`
  width: 40%;
  border: 0;
  padding: 8px 20px;
  margin: 0 2px;
  border-radius: 2px;
  letter-spacing: 1px;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: #f15186;
  color: #fff;
  &:hover {
    opacity: 0.8;
  }
`;

export default function Form(props: FormProps) {
  return (
    <>
      <form action="" onSubmit={props.getWeather}>
        <Input
          type="text"
          name="city"
          placeholder="都市名"
          onChange={(e) => {
            console.log(e.target.value);
            props.setCity(e.target.value);
          }}
        />
        <Button type="submit">Get Weather</Button>
      </form>
    </>
  );
}
