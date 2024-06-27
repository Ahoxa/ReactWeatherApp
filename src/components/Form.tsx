import React from "react";

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form(props: FormProps) {
  return (
    <>
      <form action="" onSubmit={props.getWeather}>
        <input
          type="text"
          name="city"
          placeholder="都市名"
          onChange={(e) => {
            console.log(e.target.value);
            props.setCity(e.target.value);
          }}
        />
        <button type="submit">Get Weather</button>
      </form>
    </>
  );
}
