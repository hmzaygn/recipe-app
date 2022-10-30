import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #daf6dd;
`;

export const NavImgDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
`;

export const NavImage = styled.img`
  width: 100px;
`;

export const List = styled.ul`
  width: 40%;
  font-size: 1.5rem;
  font-weight: 400;
  list-style-type: none;
  display: flex;
  /* gap: 3rem; */
  justify-content: space-between;
  li {
    a {
      text-decoration: none;
    }
  }
`;

export default Nav;
