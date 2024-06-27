import { useState } from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Result from "./components/Result";

type ResultsState = {
  country: string;
  cityName: string;
  temparature: string;
  conditionText: string;
  icon: string;
};

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsState>({
    country: "",
    cityName: "",
    temparature: "",
    conditionText: "",
    icon: "",
  });

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) =>
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temparature: data.current.temp_f,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
      );
  };

  return (
    <>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result results={results} />
    </>
  );
}

export default App;
