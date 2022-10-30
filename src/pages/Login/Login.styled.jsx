import styled from "styled-components";

const LoginStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const LoginInputArea = styled.div`
  border: 3px solid white;
  border-radius: 50%;
  background-color: #00b0b668;
  width: 35rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: white 0 0 25px 0;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 150px;
  }
  h1 {
    color: white;
    font-size: 3rem;
    margin: 1rem auto;
  }
`;

export const LoginForm = styled.form`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    width: 15rem;
    padding: 0.3rem;
    font-size: 1.2rem;
    color: white;
    border: none;
    border-radius: 10px;
    background-color: #000000a9;
    :focus {
      outline: none;
      background-color: #000000da;
    }
  }
  button {
    font-weight: 800;
    padding: 0.3rem;
    font-size: 1.2rem;
    background-color: #000000a9;
    color: white;
    border: none;
    border-radius: 5px;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
      background-color: #000000da;
    }
    :active {
      transform: scale(0.97);
    }
  }
`;

export default LoginStyled;
