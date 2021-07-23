import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <>
      <Nav>
        <Left/>
        <Right>
          <Resume href="#">Resume</Resume>
        </Right>
      </Nav>
    </>
  );
};

const Resume = styled.a`
  margin-right: 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: transform .1s ease-in-out; /* Animation */
  &:hover {
    transform: scale(1.1);
  }
  
`;
const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
  
  
`;

const Left = styled.nav``;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default NavBar;
