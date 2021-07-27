import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Projects from "./Projects";

/* Futura, Helvetica */
const Home = () => {
  return (
    <>
      <NavBar />
      <IntroContainer>
        <Intro>
          <IntroTagLine>
              Cameron Cronheimer
            <br />
            <SoftwareDeveloperText>
            Software Developer 🛠
            </SoftwareDeveloperText>
          </IntroTagLine>
          <IntroContact>
            Get in touch 👉{" "}
            <Email href="mailto:cameroncronheimer@gmail.com">
              cameroncronheimer@gmail.com
            </Email>
          </IntroContact>
        </Intro>
      </IntroContainer>
      <MyProjectsText>
        Projects
        <br />
        👇
      </MyProjectsText>
    </>
  );
};

export default Home;

const SoftwareDeveloperText = styled.div`
  font-family: "Helvetica Neue";
  font-size: 0.8em;
  font-weight: lighter;
`;
const IntroContainer = styled.div`
  padding: 50px 100px;
  height: 60vh; /* vh means 60% viewable height */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 920px;
  margin: 0 auto;

  @media screen and (max-width: 630px) {
    padding: 100px 70px;
  }
  @media screen and (max-width: 550px) {
    padding: 100px 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 100px 50px;
    height: 40vh; /* vh means 40% viewable height */
  }
`;

const Email = styled.a`
  transition: all 0.2s ease-in-out;
  font-weight: 400;
  text-decoration: none;
  display: inline-block;
  padding: 2px 3px;
  text-decoration: none;
  -webkit-box-shadow: inset 0 -3px 0 #007bff;
  box-shadow: inset 0 -3px 0 #007bff;
  color: white;
  font-family: "SF Mono";

  &:hover {
    box-shadow: inset 0 -33px 0 0 #007bff;
    color: #fff;
  }
`;
const MyProjectsText = styled.h3`
  color: white;
  text-align: center;
  margin: 0 auto;
  line-height: 1.5;
  font-size: 1.5em;
  font-family: "Helvetica Neue Bold";
  margin-top: 70px;

  @media screen and (max-width: 1024px) {
    margin-top: 70px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 550px) {
    margin: 0 auto;
  }
`;

const IntroTagLine = styled.h1`
  max-width: 700px;
  display: block;
  font-size: 2.5em;
  color: white;
  line-height: 1.2;
  font-family: "Helvetica Neue Bold";
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

const IntroContact = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  display: block;

  color: white;
  font-family: "Helvetica Neue";
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

const Intro = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40vh;
`;
