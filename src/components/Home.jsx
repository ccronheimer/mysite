import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Projects from "./Projects";
import { FaArrowRight } from "react-icons/fa";
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
            <SoftwareDeveloperText>Software Developer</SoftwareDeveloperText>
          </IntroTagLine>
          <IntroContact>
            Get in touch 👉{" "}
            <Email href="mailto:cameroncronheimer@gmail.com">
              cameroncronheimer@gmail.com
            </Email>
          </IntroContact>
        </Intro>
      </IntroContainer>
      <SectionBackground>
        <SectionTitle>Background</SectionTitle>
        <SectionContent>
          I'm currently an Engineer at Upstatement building things for the web
          with some awesome people. I recently graduated from Northeastern
          University after completing three awesome six-month co-ops at
          MullenLowe U.S., Starry, and Apple Music.
        </SectionContent>
      </SectionBackground>

      <SectionSkills>
        <SectionTitle>Skills</SectionTitle>
        <SectionContent>
          <Skills>
            <SkillsCategory>
              <SkillsCategoryLabel>Langauges</SkillsCategoryLabel>
              <ul>
                <SkillsCategoryItem>JavaScript</SkillsCategoryItem>
                <SkillsCategoryItem>Swift</SkillsCategoryItem>
                <SkillsCategoryItem>Java</SkillsCategoryItem>
              </ul>
            </SkillsCategory>
            <SkillsCategory>
              <SkillsCategoryLabel>Frameworks</SkillsCategoryLabel>
              <ul>
                <SkillsCategoryItem>JavaScript</SkillsCategoryItem>
                <SkillsCategoryItem>Swift</SkillsCategoryItem>
                <SkillsCategoryItem>Java</SkillsCategoryItem>
              </ul>
            </SkillsCategory>
            <SkillsCategory>
              <SkillsCategoryLabel>Tools</SkillsCategoryLabel>
              <ul>
                <SkillsCategoryItem>JavaScript</SkillsCategoryItem>
                <SkillsCategoryItem>Swift</SkillsCategoryItem>
                <SkillsCategoryItem>Java</SkillsCategoryItem>
              </ul>
            </SkillsCategory>
            <SkillsCategory>
              <SkillsCategoryLabel>Design</SkillsCategoryLabel>
              <ul>
                <SkillsCategoryItem>JavaScript</SkillsCategoryItem>
                <SkillsCategoryItem>Swift</SkillsCategoryItem>
                <SkillsCategoryItem>Java</SkillsCategoryItem>
              </ul>
            </SkillsCategory>
          </Skills>
        </SectionContent>
      </SectionSkills>

      <SectionExperience>
        <SectionTitle>Experience</SectionTitle>
        <SectionContent>
          <Jobs>
            <Job>
              <TimePlace>
                <JobCompany>
                  <a
                    href="https://github.com/ccronheimer"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Galatic Thumb
                  </a>
                </JobCompany>
                <JobTime>May 2018 - Present</JobTime>
              </TimePlace>
              <JobPosition>Software Engineer</JobPosition>
            </Job>
          </Jobs>
          <ArrowLink href="#">View My Resume <FaArrowRight style={{textAlign:"center", verticalAlign:"middle"}}/></ArrowLink>
        </SectionContent>
      </SectionExperience>
      <FeaturedProjects>
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionContent>
          <Project1>
            <Project1>
              <ProjectPic><img src="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04"/></ProjectPic>
              <ProjectCaption>
                <ProjectName>Coloring Asmr</ProjectName>
                <p>Custom wordpress theme built with Timber and Woocommerce for blistabloc, the only reactive shoe insert that prevents blisters from forming.</p>
              </ProjectCaption>
            </Project1>
          </Project1>
        </SectionContent>
      </FeaturedProjects>
    </>
  );
};

export default Home;

const ProjectName = styled.div`
    margin-bottom: 10px;
    display: block;
`;
const ProjectCaption = styled.figcaption`
  width: 200px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: 30px;
display: block;
    @media screen and (max-width: 768px)
 {
    width: 100%;
    margin-top: 25px;
   
}
`;
const ProjectPic = styled.figure`
max-width: 700px;
    overflow: visible;
    margin: 0;
    display: block;
    margin-inline-start: 80px;
    margin-inline-end: 40px;
  

@media screen and (max-width: 768px)
 {
  margin-inline-start: 40px;
    margin-inline-end: 40px;
}
`;
const Project1 = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 100px;
    margin-left: -5%;
    width: 125%;

    @media screen and (max-width: 1280px)
{
    width: 115%;
}
@media screen and (max-width: 1024px)
 {
    width: 105%;
}
@media screen and (max-width: 768px)
 {
    width: 100%;
    display: block;
    margin-bottom: 70px;
}
`;
const FeaturedProjects = styled.div`
  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 100px 170px;
   
  @media screen and (max-width: 1280px) {
    padding: 100px;
  }
  @media screen and (max-width: 1024px) {
    padding: 50px;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 480px) {
    padding: 50px 35px;
  }
`;

const ArrowLink = styled.a`
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-weight: 700;
  display: inline-block;
  background-color: transparent;
  white-space: nowrap;
  font-size: 1.25rem;
  text-decoration: none;
  color: white;

`;
const JobPosition = styled.div`
  font-size: 0.9rem;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const JobTime = styled.div`
  font-size: 0.9rem;
  font-family: "SF Mono";
  margin-top: 3.5px;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
const JobCompany = styled.div`
  font-weight: 700;
  text-decoration: none;
  color: white;
`;
const TimePlace = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  text-decoration: none;
`;
const Job = styled.div`
  margin-bottom: 25px;
`;
const Jobs = styled.div`
  margin-bottom: 100px;
  text-decoration: none;
`;
const SectionExperience = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 100px 170px;
  text-decoration: none;
  line-height: 1.5;
  @media screen and (max-width: 1280px) {
    padding: 100px;
  }

  @media screen and (max-width: 1024px) {
    padding: 50px;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 480px) {
    padding: 50px 35px;
  }
`;
const SkillsCategoryItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  margin: 3px 0;
  font-size: 0.9rem;
  color: white;
`;
const SkillsCategoryLabel = styled.div`
  font-weight: 700;
  color: white;
  text-transform: uppercase;
`;
const SkillsCategory = styled.div`
  @media screen and (max-width: 630px) {
    width: 47%;
    margin-right: 5px;
    margin-bottom: 25px;
  }
`;
const Skills = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  @media screen and (max-width: 630px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`;
const SectionSkills = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 100px 170px;
  @media screen and (max-width: 1280px) {
    padding: 100px;
  }
  @media screen and (max-width: 1024px) {
    padding: 50px;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 480px) {
    padding: 50px 35px;
  }
`;
const SectionContent = styled.div`
  font-weight: 300;
  font-size: 1rem;
  width: 100%;
  max-width: 650px;
  font-family: "Helvetica Neue";
  color: white;
  word-wrap: break-word;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox */
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
    padding-left: 50px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 30px;
  }
`;
const SectionTitle = styled.div`
  flex-shrink: 0;
  width: 200px;
  margin-right: 70px;
  color: #007bff;
  text-transform: uppercase;
  text-align: right;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: "Helvetica Neue Bold";
  white-space: nowrap;
  @media screen and (max-width: 1024px) {
    margin-right: 50px;
  }
  @media screen and (max-width: 850px) {
    width: 150px;
  }
  @media screen and (max-width: 768px) {
    text-align: left;
    width: auto;
  }
`;
const SectionBackground = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 100px 170px;

  @media screen and (max-width: 1280px) {
    padding: 100px;
  }
  @media screen and (max-width: 1024px) {
    padding: 50px;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 480px) {
    padding: 50px 35px;
  }
`;

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
    padding: 100px 35px;
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
