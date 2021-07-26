import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LinkedIn } from "@material-ui/icons";

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
           <FaGithub size ="2em"/>
          </Icon>
          <Icon href="https://www.linkedin.com/in/cameron-cronheimer-ab3a47165/" target="_blank">
           <FaLinkedin size="2em"/>
          </Icon>
        </Right>
      </Nav>
    </>
  );
};

const Icon = styled.a`
  /* em means 2x relative to this font */
    margin: 20px;
    display: inline-flex; /* makes a tag size of image */
    transition: transform .1s ease-in-out; /* Animation */
    text-decoration: none;
    color:  white;
    font-size: 1.3rem;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1rem;
    margin: 15px;
  }

`;
const Resume = styled.div`
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: transform .1s ease-in-out; /* Animation */
  font-family: "SF Pro Rounded";

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
  padding-top: 20px;
`;

const Left = styled.nav``;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export default NavBar;
