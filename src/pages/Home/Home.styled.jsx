import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
`;

export const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2 {
    margin-top: 2rem;
    font-size: 4rem;
  }
`;

export const Form = styled.form`
  border: 2px solid white;
  width: fit-content;
  padding: 0.3rem;
  border-radius: 5px;

  input {
    padding: 0.3rem;
    margin-right: 0.5rem;
    border: none;
    width: 10rem;
    font-size: 1.5rem;
  }

  select {
    padding: 0.3rem;
    margin-right: 0.5rem;
    background-color: #daf6dd;
    border: none;
    width: 7rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
      background-color: #bdbcbcb3;
    }
  }

  button {
    border: none;
    padding: 0.3rem;
    width: 7rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
      background-color: #bdbcbcb3;
    }
    :active {
      transform: scale(97%);
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardStructure = styled.div`
  width: 15rem;
  height: 20rem;
  background-color: #00b0b6;
  margin: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 7px 5px 5px rgb(0, 0, 0, 0.3);
  border-radius: 2.5px;
  div {
    width: 100%;
    height: 4rem;
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  button {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    border: none;
    background-color: #daf6dd;
    padding: 0.3rem 0.5rem;
    border-radius: 2px;
    transition: all 0.3s;
    :hover {
      background-color: #bdbcbcb3;
    }
    :active {
      transform: scale(97%);
    }
  }
`;

export default HomeContainer;
