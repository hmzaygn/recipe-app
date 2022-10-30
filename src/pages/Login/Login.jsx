import LoginImg from "../../assets/meal2.svg";
import LoginStyled, { LoginInputArea, LoginForm } from "./Login.styled";
import LoginBackground from "../../assets/login.jpg";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  // const [name, setName] = useState();
  // const [password, setPassword] = useState();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("USER", JSON.stringify(user));
    if (user.name && user.password) {
      navigate("/home");
    }
    setUser({
      name: "",
      password: "",
    });
  };

  return (
    <LoginStyled bg={LoginBackground}>
      <LoginInputArea>
        <div>
          <img src={LoginImg} alt="" />
          <h1>Code-Luck Recipe App</h1>
        </div>
        <LoginForm onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <button>LOGIN</button>
        </LoginForm>
      </LoginInputArea>
    </LoginStyled>
  );
};

export default Login;
