import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00b0b6;
`;

export const AboutImg = styled.img`
  width: 500px;
`;

export const DescContainer = styled.div`
  width: 75%;
  text-align: center;
  border: 1px solid white;
  border-radius: 10px;
  padding: 2rem;
  margin-top: 1rem;
  h2 {
    padding-bottom: 1rem;
    font-size: 2rem;
    color: white;
  }

  p {
    font-size: 1.5rem;
    text-align: end;
    line-height: 2rem;
    font-weight: 600;
  }
`;

export default AboutContainer;
