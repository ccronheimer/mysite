import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DayNightToggle from "./Toggle/DayNightToggle";
const NavBar = ({ themeToggler }) => {
  return (
    <>
      <Nav>
        <Left>
          <DayNightToggle themeToggler={themeToggler} />
        </Left>
        <Right>
          <AnchorLink style={{ textDecoration: "none" }} href="#projects">
            <Button>
              <ButtonText>Projects</ButtonText>
            </Button>
          </AnchorLink>
        </Right>
      </Nav>
    </>
  );
};

const ButtonText = styled.a`
  color: white;
  font-family: "Helvetica Neue Bold";
`;
const Button = styled.div`
  display: inline-block;
  padding: 3px 0 6px;
  border-radius: 20px;

  outline: none;
  padding-inline: 20px;
  padding-block: 10px;
  background-color: #057bf7;
  white-space: nowrap;
  text-decoration: none;

  @media screen and (max-width: 550px) {
    padding: 8px 12px;
    font-size: 0.85em;
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
    padding: 15px 10px;
  }
  @media screen and (max-width: 480px) {
    padding: 15px 10px;
  }
`;

const Left = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5px;

`;

export default NavBar;
