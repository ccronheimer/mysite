import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Projects from "./Projects";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
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
            <SoftwareDeveloperText><SecondaryText>Software Developer</SecondaryText></SoftwareDeveloperText>
          </IntroTagLine>
          <IntroContact>
          <SecondaryText>
            Get in touch 
            </SecondaryText>
            {" "}👉{" "}
            <Email href="mailto:cameroncronheimer@gmail.com">
              cameroncronheimer@gmail.com
            </Email>
          </IntroContact>
        </Intro>
      </IntroContainer>
      <SectionBackground>
        <SectionTitle>Background</SectionTitle>
        <SectionContent>
          <SecondaryText>I am currently studying </SecondaryText><BoldLink href="https://brocku.ca/webcal/2020/undergrad/cosc.html" target="_blank">Computer Science</BoldLink> <SecondaryText>at</SecondaryText>  <BoldLink href="https://en.wikipedia.org/wiki/Brock_University" target="_blank">Brock University</BoldLink><SecondaryText>. I am seeking a software developer internship for spring 2022.</SecondaryText>
        </SectionContent>
      </SectionBackground>

      <SectionSkills>
        <SectionTitle>Skills</SectionTitle>
        <SectionContent>
          <Skills>
            <SkillsCategory>
              <SkillsCategoryLabel>Langauges</SkillsCategoryLabel>
              <ul style={{listStyleType: "none", padding: "0", margin:"0", lineHeight:"1.5"}}>
                <SkillsCategoryItem>JavaScript</SkillsCategoryItem>
                <SkillsCategoryItem>Swift</SkillsCategoryItem>
                <SkillsCategoryItem>Java</SkillsCategoryItem>
                <SkillsCategoryItem>C#</SkillsCategoryItem>
                <SkillsCategoryItem>Python</SkillsCategoryItem>
                <SkillsCategoryItem>SQL</SkillsCategoryItem>
              </ul>
            </SkillsCategory>
            <SkillsCategory>
              <SkillsCategoryLabel>Frameworks</SkillsCategoryLabel>
              <ul style={{listStyleType: "none", padding: "0", margin:"0", lineHeight:"1.5"}}>

                <SkillsCategoryItem>React</SkillsCategoryItem>
                <SkillsCategoryItem>React-Native</SkillsCategoryItem>
                <SkillsCategoryItem>SwiftUI</SkillsCategoryItem>
                <SkillsCategoryItem>Express</SkillsCategoryItem>
                <SkillsCategoryItem>Styled Components</SkillsCategoryItem>

              </ul>
            </SkillsCategory>
            <SkillsCategory>
              <SkillsCategoryLabel>Tools</SkillsCategoryLabel>
              <ul style={{listStyleType: "none", padding: "0", margin:"0", lineHeight:"1.5"}}>

                <SkillsCategoryItem>Git & Github</SkillsCategoryItem>
                <SkillsCategoryItem>Firebase Firestore</SkillsCategoryItem>
                <SkillsCategoryItem>MongoDB</SkillsCategoryItem>
                <SkillsCategoryItem>Unity</SkillsCategoryItem>
                <SkillsCategoryItem>PostreSQL</SkillsCategoryItem>
                <SkillsCategoryItem>Node</SkillsCategoryItem>
              </ul>
            </SkillsCategory>
            <SkillsCategory>
              <SkillsCategoryLabel>Design</SkillsCategoryLabel>
              <ul style={{listStyleType: "none", padding: "0", margin:"0", lineHeight:"1.5"}}>
                <SkillsCategoryItem>Figma</SkillsCategoryItem>
                <SkillsCategoryItem>Blender</SkillsCategoryItem>
                <SkillsCategoryItem>draw.io</SkillsCategoryItem>

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
                
                  <BoldLink href="https://galacticthumb.com/">Galatic Thumb</BoldLink>
                  
                </JobCompany>
                <JobTime>May 2019 - June 2020</JobTime>
              </TimePlace>
              <JobPosition>Software Engineer</JobPosition>
            </Job>
          </Jobs>
          <ArrowLink href="#">
            View My Resume{" "}
            <FaArrowRight
              style={{ textAlign: "center", verticalAlign: "middle", color: "#057bf7"}}
            />
          </ArrowLink>
        </SectionContent>
      </SectionExperience>
      <FeaturedProjects>
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionContent>
          <Project1>
            <Project1>
              <ProjectPic>
                <img src="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" />
              </ProjectPic>
              <ProjectCaption>
                <ProjectName>Coloring Asmr</ProjectName>
                <p>
                  Custom wordpress theme built with Timber and Woocommerce for
                  blistabloc, the only reactive shoe insert that prevents
                  blisters from forming.
                </p>
              </ProjectCaption>
            </Project1>
          </Project1>
        </SectionContent>
      </FeaturedProjects>
      <OtherProjects>
        <SectionTitle>More Projects</SectionTitle>
        <SectionContent>
          <Project>
            <MoreProjectName>Neural Network</MoreProjectName>
            <p>
              Small React project created during an interview process to browse
              and search surf videos via the YouTube API.
            </p>
            <TechUsed>
              <TechItem>Java</TechItem>
            </TechUsed>
          </Project>
          <Project>
            <MoreProjectName>Surf</MoreProjectName>
            <p>
              Small React project created during an interview process to browse
              and search surf videos via the YouTube API.
            </p>
            <TechUsed>
              <TechItem>JavaScript</TechItem>
              <TechItem>React</TechItem>
              <TechItem>Axios</TechItem>
            </TechUsed>
          </Project>
          <Project>
            <MoreProjectName>Surf</MoreProjectName>
            <p>
              Small React project created during an interview process to browse
              and search surf videos via the YouTube API.
            </p>
            <TechUsed>
              <TechItem>JavaScript</TechItem>
              <TechItem>React</TechItem>
              <TechItem>Axios</TechItem>
            </TechUsed>
          </Project>
        </SectionContent>
      </OtherProjects>
      <TheFooter>
        <FooterCopyRight>
          <Top>
            <span>Developed by</span>
          </Top>
          <Bottom>
            <span>Cameron Cronheimer 🇨🇦 2021</span>
          </Bottom>
        </FooterCopyRight>
        <FooterLinks>
          <FooterLink>
            <FaLinkedin />
          </FooterLink>
          <FooterLink>
            <FaGithub />
          </FooterLink>
          <FooterLink>
            <FaInstagram />
          </FooterLink>
        </FooterLinks>
      </TheFooter>
    </>
  );
};

export default Home;

const BoldLink = styled.a`
   text-decoration: none;
   color: white;
   font-family: "Helvetica Neue Bold";
   
`;
const FooterLink = styled.div`
  position: relative;
  display: inline-block;
  color: #057bf7 !important;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 15px;
  outline: 0;
  text-decoration: none;
`;
const FooterLinks = styled.div`
 font-size: 2em;

  @media screen and (max-width: 630px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 1.5em;
  }

`;
const Bottom = styled.div`
  @media screen and (max-width: 630px) {
    display: inline-block;
    font-size: 0.9em;
  }
  @media screen and (max-width: 480px) {
    display: block;
    font-size: 0.9em;
  }
`;
const Top = styled.div`
  @media screen and (max-width: 630px) {
    display: inline-block;
    font-size: 0.9em;

  }
  @media screen and (max-width: 480px) {
    display: block;
    font-size: 0.9em;
  }
`;
const FooterCopyRight = styled.div`
  font-weight: 700;
  width: 300px;
  font-family: "SF Mono";
  color: #f5f5f7;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox */
  box-sizing: border-box;
  @media screen and (max-width: 630px) {
    width: auto;
    text-align: center;
    margin-bottom: 25px;
  }
`;
const TheFooter = styled.footer`
  padding: 50px 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 50px;
    
  }
  @media screen and (max-width: 630px) {
    display: block;
  }
  @media screen and (max-width: 480px) {
    padding: 50px 30px;
  }
`;
const TechItem = styled.span`
  display: inline-block;
  margin: 3px 5px 3px 0;
  font-family: "SF Mono";
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 3px;
  color: #057bf7;
  border: 1px solid #057bf7;
  background: 0 0;
`;
const TechUsed = styled.div``;

const ProjectName = styled.div`
  margin-bottom: 10px;
  font-family: "Helvetica Neue Bold";
  color: #f5f5f7;
  font-size: 1.1em;
  @media screen and (max-width: 630px) {
    display: block;
    font-size: 1em;

  }
  
`;
const Project = styled.div`
  max-width: 600px;
  margin-bottom: 50px;
`;
const OtherProjects = styled.section`
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
const MoreProjectName = styled.div`
  margin-bottom: 10px;
  display: block;

  font-family: "Helvetica Neue Bold";
  color: #f5f5f7;
  font-size: 1.1em;
  @media screen and (max-width: 630px) {
    display: block;
    font-size: 1em;

  }
`;
const ProjectCaption = styled.figcaption`
  width: 200px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-left: 30px;
  display: block;
  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 1280px) {
    width: 115%;
  }
  @media screen and (max-width: 1024px) {
    width: 105%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
    margin-bottom: 70px;
  }
`;
const FeaturedProjects = styled.section`
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
  font-family: "Helvetica Neue Bold";
  display: inline-block;
  background-color: transparent;
  white-space: nowrap;
  font-size: 1.2rem;
  text-decoration: none;
  color: #f5f5f7;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
const JobPosition = styled.div`
  font-size: 1rem;
  font-family: "Helvetica Neue";
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
const JobTime = styled.div`
  font-size: 0.85rem;
  font-family: "SF Mono";
  margin-top: 3.5px;
  color: #f5f5f7;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
const JobCompany = styled.div`
  
  text-decoration: none;
  font-size: 1.1rem;
  color: #f5f5f7;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }

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
  color: #f5f5f7;
`;
const SkillsCategoryLabel = styled.div`
  font-family: "Helvetica Neue Bold";
  color: #f5f5f7;
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
  color: #f5f5f7;
  word-wrap: break-word;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox */
  box-sizing: border-box;
  
  /* Change fontweight to 700 for bold */
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
  /* color: #007bff; */
  color: #057bf7;
  text-transform: uppercase;
  text-align: right;
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
  
  text-decoration: none;
  display: inline-block;
  padding: 2px 3px;
  text-decoration: none;
  -webkit-box-shadow: inset 0px -4px 0 #057bf7;
  box-shadow: inset 0px -4px 0px #057bf7;
  padding-bottom: 6px;
  color: white;
  font-family: "SF Mono Bold";
 
  &:hover {
    box-shadow: inset 0 -33px 0 0 #057bf7;
    
  }
`;

const IntroTagLine = styled.h1`
  max-width: 700px;
  display: block;
  font-size: 2.3em;
  color: #f5f5f7;
  line-height: 1.2;
  
  font-family: "Helvetica Neue Bold";
  @media screen and (max-width: 1024px) {
    font-size: 2.2rem;
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
  display: block;
  font-weight: 400;
  color: white;
  
  font-family: "Helvetica Neue";

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;
const SecondaryText = styled.span`
  opacity: 87%;
`;
const Intro = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40vh;
`;
