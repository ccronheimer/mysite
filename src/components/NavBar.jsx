import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
    
      <Nav>
        <Left/>
        <Right>
          <Icon href="#" target="_blank">
              <Resume>Resume</Resume>
          </Icon>
          <Icon href="https://github.com/ccronheimer" target="_blank">
           <FaGithub size="3em" color="white"/>
          </Icon>
          <Icon href="https://www.linkedin.com/in/cameron-cronheimer-ab3a47165/" target="_blank">
           <FaLinkedin size="3em" color="white"/>
          </Icon>
        </Right>
      </Nav>
    </>
  );
};

const Icon = styled.a`
    margin: 20px;
    display: inline-flex; /* makes a tag size of image */
    transition: transform .1s ease-in-out; /* Animation */
    text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
`;
const Resume = styled.div`
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: transform .1s ease-in-out; /* Animation */
  &:hover {
    transform: scale(1.1);
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1436px;
  margin: 0 auto;
  
`;

const Left = styled.nav``;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export default NavBar;
