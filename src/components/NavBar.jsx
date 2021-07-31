import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaMoon } from "react-icons/fa";
import { LinkedIn } from "@material-ui/icons";

const NavBar = () => {
  return (
    <>
    
      <Nav>
        <Left>
        <Icon href="#" target="_blank">
           <FaMoon size="1.5em"/>
          </Icon>
        </Left>
        <Right>
        <Button href="#"><ButtonText>Projects</ButtonText></Button>
          
        </Right>
      </Nav>
    </>
  );
};

const ButtonText = styled.a`
color: white;
font-family: "Helvetica Neue Bold";


`;
const Button = styled.a`
 display: inline-block;
    padding: 3px 0 6px;
    border-radius: 20px;
 
    outline: none;
    padding-inline: 20px;
    padding-block: 10px;
    background-color: #057bf7;
    white-space: nowrap;
    text-decoration: none;

    @media screen and (max-width: 1024px) {
    
  }
 
  @media screen and (max-width: 550px) {
    padding-inline: 12px;
    padding-block: 8px;
    font-size: 0.85em;
    margin-right: 10px;
    
  }

`;
const Icon = styled.a`
  /* em means 2x relative to this font */
    margin: 20px;
    display: inline-flex; /* makes a tag size of image */
    transition: transform .15s ease-in-out; /* Animation */
    text-decoration: none;
    color:  white;
    font-size: 1.3rem;
  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1rem;
    margin: 10px;
  }

`;
const Resume = styled.div`
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: transform .1s ease-in-out; /* Animation */
  font-family: "Helvetica Neue Bold";


  &:hover {
    transform: scale(1.1);
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
  padding-top: 30px;
  padding-inline: 30px;

  @media screen and (max-width: 630px) {
    padding: 20px 10px;
  }
  @media screen and (max-width: 550px) {
    padding: 10px 10px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 10px;
  }
`;

const Left = styled.nav`
 display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export default NavBar;
