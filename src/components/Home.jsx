import React from "react";
import styled from "styled-components";
import Car from "../video/s.mp4";
import NavBar from "./NavBar";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <NavBar />
      <Intro>
        <IntroHello>Hello! 👋</IntroHello>
        <IntroTagLine>
          I'm <span style={{fontWeight: "bold"}}>Cameron Cronheimer</span>, a software engineer from 🇨🇦 focused on
          building mobile/web apps 👨🏻‍💻
        </IntroTagLine>
        <IntroContact>Get in touch 👉 <Email>cameroncronheimer@gmail.com</Email></IntroContact>
      </Intro>
      <Projects />
    </>
  );
};

export default Home;

const IntroHello = styled.h1`
  font-weight: 300;
  font-size: 2.5rem;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: white;

  @media screen and (max-width: 1024px) {
    font-size: 2.25rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.5rem;
  }
`;
const Email = styled.span`
text-decoration: underline #316DCA;
text-decoration-thickness: 3px;
text-underline-offset: 4px;
`;
const IntroTagLine = styled.h2`
  font-weight: 300;
  max-width: 700px;
  display: block;
  font-size: 2.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: white;
  
  @media screen and (max-width: 1024px) {
    font-size: 2.25rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

const IntroContact = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: white;

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }

`;

const Intro = styled.header`
  padding: 120px 100px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 1436px;
  margin: 0 auto;
  background-color: #18191a;

  @media screen and (max-width: 630px) {
    padding: 120px 70px;
  }
  @media screen and (max-width: 550px) {
    padding: 120px 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 70px 50px;
  }
`;
