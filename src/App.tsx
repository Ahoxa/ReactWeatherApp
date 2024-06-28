import { useState } from "react";

import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
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
          temparature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
      );
  };

  return (
    <Wrapper>
      <Container>
        <h1>React Weather App</h1>
        <Form setCity={setCity} getWeather={getWeather} />
        <Result results={results} />
      </Container>
    </Wrapper>
  );
}

export default App;
