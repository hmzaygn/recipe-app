import React from "react";
import Nav, { List, NavImage, NavImgDiv } from "./Nav.styled";
import NavImg from "../../assets/bowl.svg";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
  };

  const handleNameClick = () => {
    navigate("/home");
  };

  return (
    <Nav>
      <NavImgDiv className="HeaderLogo" onClick={handleNameClick}>
        <h1>CODE-LUCK</h1>
        <NavImage src={NavImg} alt="" />
      </NavImgDiv>
      <List>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive && "#00b0b6",
              fontWeight: isActive && 600,
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive && "#00b0b6",
              fontWeight: isActive && 600,
            })}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <a href="https://github.com/hmzaygn" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <NavLink to="/login" onClick={handleLogOut}>
            Logout
          </NavLink>
        </li>
      </List>
    </Nav>
  );
};
export default Navbar;
