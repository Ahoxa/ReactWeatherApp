type ResultsProps = {
  results: {
    country: string;
    cityName: string;
    temparature: string;
    conditionText: string;
    icon: string;
  };
};

function Result(props: ResultsProps) {
  return (
    <>
      <h1>気象データ</h1>
      {props.results.country && (
        <div>
          <div>{props.results.country}</div>
          <div>{props.results.cityName}</div>
          <div>{props.results.temparature}</div>
          <div>{props.results.conditionText}</div>
          <img src={props.results.icon} alt="icon" />
          <span>{props.results.conditionText}</span>
        </div>
      )}
    </>
  );
}

export default Result;
