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
        <Button href="#">Projects</Button>
          
        </Right>
      </Nav>
    </>
  );
};

const Button = styled.a`

    text-decoration: none;
    
 background-color: #057bf7; /* Green */
  border: none;
  color: white;
  padding-inline: 20px;
  padding-block: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  border-radius: 30px;
  font-family: "Helvetica Neue Bold";
 
box-shadow:
  0 100px 80px rgba(5, 123, 247, 0.07),
  0 41.7px 33.4px rgba(5, 123, 247, 0.05),
  0 22.3px 17px rgba(5, 123, 247, 0.04),
  0 12.5px 10px rgba(5, 123, 247, 0.035),
  0 6.65px 5.3px rgba(5, 123, 247, 0.028),
  0 2.7px 2.2px rgba(5, 123, 247, 0.019)
;


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
