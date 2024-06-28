import styled from "styled-components";

type ResultsProps = {
  results: {
    country: string;
    cityName: string;
    temparature: string;
    conditionText: string;
    icon: string;
  };
};

const City = styled.div`
  font-size: 4rem;
`;
const Country = styled.div`
  font-size: 2rem;
`;

const Temparature = styled.div`
  font-size: 6rem;
  margin: 10px 0;
  color: #f15186;
`;

const Temp_span = styled.span`
  font-size: 3rem;
  color: #bdbdbd;
`;

const Condition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
`;

function Result(props: ResultsProps) {
  return (
    <>
      <h1>気象データ</h1>
      {props.results.country && (
        <div>
          <Country>{props.results.country}</Country>
          <City>{props.results.cityName}</City>
          <Temparature>{props.results.temparature}℃</Temparature>
          <div>{props.results.conditionText}</div>
          <Condition>
            <img src={props.results.icon} alt="icon" />
            <Temp_span>{props.results.conditionText}</Temp_span>
          </Condition>
        </div>
      )}
    </>
  );
}

export default Result;
