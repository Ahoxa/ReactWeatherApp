import styled from "styled-components";

const Container = styled.div`
  width: 50vw;
  text-align: center;
  padding: 40px 20px;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  box-shadow: 4px 4px 13px 5px rgba(0, 0, 0, 0.25);
  @media only screen and (max-width: 700px) {
    width: 80vw;
  }
`;

export default Container;
