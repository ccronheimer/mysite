
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import NavBar from "./NavBar";
import Projects from "./Projects";

import BoardLifeVid from "../video/BoardLifeNew.mp4";
import ColoringAsmrVid from "../video/ColoringASMR.mp4";
import SpermGameVid from "../video/SpermGame.mp4";
import BulletCityVid from "../video/BulletCity.mp4";
import Resume from "./resume.pdf";

import { lightTheme, darkTheme, GlobalStyles } from "../themes.jsx";


import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
/* Futura, Helvetica */
const Home = () => {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

  return (

    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
     <GlobalStyles />
        {/*<button onClick={() => themeToggler()}></button>*/}
      <NavBar />

      <IntroContainer>
        <Intro>
          <IntroTagLine>
            Cameron Cronheimer
            <br />
            <SoftwareDeveloperText>Software Developer</SoftwareDeveloperText>
          </IntroTagLine>
          <IntroContact>
            <SecondaryText>Get in touch</SecondaryText> 👉{" "}
            <Email href="mailto:cameroncronheimer@gmail.com">
              cameroncronheimer@gmail.com
            </Email>
          </IntroContact>
        </Intro>
      </IntroContainer>
      <SectionBackground>
        <SectionTitle>Background</SectionTitle>
        <SectionContent>
          <SecondaryText>I am currently studying </SecondaryText>
          <BoldLink
            href="https://brocku.ca/webcal/2020/undergrad/cosc.html"
            target="_blank"
          >
            Computer Science
          </BoldLink>{" "}
          <SecondaryText>at</SecondaryText>{" "}
          <BoldLink
            href="https://en.wikipedia.org/wiki/Brock_University"
            target="_blank"
          >
            Brock University
          </BoldLink>
          <SecondaryText>
            . I am looking for a software developer internship for spring 2022.
          </SecondaryText>
        </SectionContent>
      </SectionBackground>

      <SectionSkills>
        <SectionTitle>Skills</SectionTitle>
        <SectionContent>
          <Skills>
            <SkillsCategory>
              <SkillsCategoryLabel>Langauges</SkillsCategoryLabel>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  margin: "0",
                  lineHeight: "1.5",
                }}
              >
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
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  margin: "0",
                  lineHeight: "1.5",
                }}
              >
                <SkillsCategoryItem>React</SkillsCategoryItem>
                <SkillsCategoryItem>React-Native</SkillsCategoryItem>
                <SkillsCategoryItem>SwiftUI</SkillsCategoryItem>
                <SkillsCategoryItem>Express</SkillsCategoryItem>
                <SkillsCategoryItem>Styled Components</SkillsCategoryItem>
              </ul>
            </SkillsCategory>
            <SkillsCategory>
              <SkillsCategoryLabel>Tools</SkillsCategoryLabel>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  margin: "0",
                  lineHeight: "1.5",
                }}
              >
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
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  margin: "0",
                  lineHeight: "1.5",
                }}
              >
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
                  <BoldLink href="https://galacticthumb.com/">
                    Galatic Thumb
                  </BoldLink>
                </JobCompany>
                <JobTime>May 2019 - June 2020</JobTime>
              </TimePlace>
              <JobPosition>Software Engineer</JobPosition>
            </Job>
          </Jobs>
          <ArrowLink href={Resume} target="_blank" rel="noopener noreferrer">
            View My Resume{" "}
            <FaArrowRight
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                color: "#057bf7",
                position: "absolute",
                right: "0px",
                top: "5px",
                
              }}
            />
          </ArrowLink>
        </SectionContent>
      </SectionExperience>
      <FeaturedProjects id="projects">
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionContent>

        <Project1>
            <ProjectPic
              width="250"
              controls={false}
              autoPlay
              muted
              loop
              playsInline
              
            >
              <source src={SpermGameVid} type="video/mp4" />
            </ProjectPic>

            <ProjectCaption>
              <ProjectName>Sus Adventure</ProjectName>
              <FeaturedProjectDescription>
                A relaxing Coloring ASMR app I made with Unity and C#, currently
                live on the PlayStore and AppStore.
              </FeaturedProjectDescription>
              <ProjectLinks>
              <IconLink href="https://apps.apple.com/us/app/sus-adventure-2/id1564807026" target="_blank" rel="noopener noreferrer"> 
              <FaApple/>

              </IconLink>
              <IconLink href="https://play.google.com/store/apps/details?id=com.cameroncronheimer.susadventure" target="_blank" rel="noopener noreferrer">
              <FaAndroid/>
              </IconLink>

              </ProjectLinks>
            </ProjectCaption>
          </Project1>

          <Project1>
            <ProjectPic
              width="250"
              controls={false}
              autoPlay
              muted
              loop
              playsInline
              
            >
              <source src={ColoringAsmrVid} type="video/mp4" />
            </ProjectPic>

            <ProjectCaption>
              <ProjectName>Coloring ASMR </ProjectName>
              <FeaturedProjectDescription>
                A relaxing Coloring ASMR app I made with Unity and C#, currently
                live on the PlayStore and AppStore.
              </FeaturedProjectDescription>
              <ProjectLinks>
              <IconLink href="https://apps.apple.com/us/app/coloring-asmr/id1522171988" target="_blank" rel="noopener noreferrer"> 
              <FaApple/>

              </IconLink>
              <IconLink href="https://play.google.com/store/apps/details?id=com.cameroncronheimer.ColoringAsmr" target="_blank" rel="noopener noreferrer">
              <FaAndroid/>
              </IconLink>

              </ProjectLinks>
            </ProjectCaption>
          </Project1>

          <Project1>
          <ProjectPic
              width="250"
              controls={false}
              autoPlay
              muted
              loop
              playsInline
              
            >
              <source src={BoardLifeVid} type="video/mp4" />
            </ProjectPic>
            <ProjectCaption>
              <ProjectName>Board Life</ProjectName>
              <FeaturedProjectDescription>
                A physics balance board game I made with Unity and C#, currently
                live on the PlayStore and AppStore.
              </FeaturedProjectDescription>
              
              <ProjectLinks>
              <IconLink href="https://apps.apple.com/us/app/board-life/id1444221598" target="_blank" rel="noopener noreferrer"> 
              <FaApple/>

              </IconLink>
              </ProjectLinks>
            
            </ProjectCaption>
          </Project1>

          <Project1>
          <ProjectPic
              width="250"
              controls={false}
              autoPlay
              muted
              loop
              playsInline
              
            >
              <source src={BulletCityVid} type="video/mp4" />
            </ProjectPic>
            <ProjectCaption>
              <ProjectName>Bullet City</ProjectName>
              <FeaturedProjectDescription>
                A physics balance board game I made with Unity and C#, currently
                live on the PlayStore and AppStore.
              </FeaturedProjectDescription>
              <ProjectLinks>
              <IconLink href="https://apps.apple.com/us/app/bullet-city/id1460269119" target="_blank" rel="noopener noreferrer"> 
              <FaApple/>

              </IconLink>
              

              </ProjectLinks>
            </ProjectCaption>
          </Project1>

        </SectionContent>
      </FeaturedProjects>
      <OtherProjects>
        <SectionTitle>More Projects</SectionTitle>
        <SectionContent>
          <Project>
          <ArrowLink href="https://github.com/ccronheimer/NeuralNetwork" target="_blank" rel="noopener noreferrer">
            Neural Network{" "}
            <FaArrowRight
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                color: "#057bf7",
                position: "absolute",
                right: "0px",
                top: "5px",
                
              }}
            />
            </ArrowLink>
            <ProjectDescription>
             Trained and designed a feed-forward neural network in Java for COSC 3P71 intro to AI. The network uses backpropagation to detect odd parity bits.
            </ProjectDescription>
            <TechUsed>
              <TechItem>Java</TechItem>
            </TechUsed>
          </Project>
          <Project>
          <ArrowLink href="https://github.com/ccronheimer/UnityiOSAndroidRatingRequest" target="_blank" rel="noopener noreferrer">
            Unity iOS | Android rating request {" "}
            <FaArrowRight
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                color: "#057bf7",
                position: "absolute",
                right: "0px",
                top: "5px",
                
              }}
            />
            </ArrowLink>
            <ProjectDescription>
              A univeral script to request a rating from your users that works on Android and iOS devices with one line.
            </ProjectDescription>
            <TechUsed>
              <TechItem>Unity</TechItem>
              <TechItem>C#</TechItem>
            </TechUsed>
          </Project>
          <Project>
          <ArrowLink href="#" target="_blank" rel="noopener noreferrer">
            Unity iOS Leaderboard{" "}
            <FaArrowRight
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                color: "#057bf7",
                position: "absolute",
                right: "0px",
                top: "5px",
                
              }}
            />
            </ArrowLink>
            <ProjectDescription>
              Simple integration of a iOS leaderboard to work in your Unity app.
            </ProjectDescription>
            <TechUsed>
              <TechItem>Unity</TechItem>
              <TechItem>C#</TechItem>
            </TechUsed>
          </Project>
          <Project>
          <ArrowLink href="#" target="_blank" rel="noopener noreferrer">
            Genetic Algorithm{" "}
            <FaArrowRight
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                color: "#057bf7",
                position: "absolute",
                right: "0px",
                top: "5px",
                
              }}
            />
            </ArrowLink>
            <ProjectDescription>
              Small React project created during an interview process to browse
              and search surf videos via the YouTube API.
            </ProjectDescription>
            <TechUsed>
              <TechItem>Java</TechItem>
            </TechUsed>
          </Project>
          <Project>
          <ArrowLink href="https://github.com/ccronheimer/mysite" target="_blank" rel="noopener noreferrer">
            My Site{" "}
            <FaArrowRight
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                color: "#057bf7",
                position: "absolute",
                right: "0px",
                top: "5px",
                
              }}
            />
            </ArrowLink>
            <ProjectDescription>
              My personal website I made to showcase my projects.
            </ProjectDescription>
            <TechUsed>
              <TechItem>JavaScript</TechItem>
              <TechItem>React</TechItem>
              <TechItem>Styled Components</TechItem>
            </TechUsed>
          </Project>
          <Project>
          <ArrowLink href="#" target="_blank" rel="noopener noreferrer">
            Isometric Graph Maze{" "}
            <FaArrowRight
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                color: "#057bf7",
                position: "absolute",
                right: "0px",
                top: "5px",
                
              }}
            />
            </ArrowLink>
            <ProjectDescription>
              Small React project created during an interview process to browse
              and search surf videos via the YouTube API.
            </ProjectDescription>
            <TechUsed>
              <TechItem>Java</TechItem>
            </TechUsed>
          </Project>
          <Project>
          <ArrowLink href="#" target="_blank" rel="noopener noreferrer">
            Instagram Liking Bot{" "}
            <FaArrowRight
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                color: "#057bf7",
                position: "absolute",
                right: "0px",
                top: "5px",
                
              }}
            />
            </ArrowLink>
            <ProjectDescription>
              A Instagram bot that likes posts under a select hashtag to boost direct traffic back to an account.
            </ProjectDescription>
            <TechUsed>
              <TechItem>Python</TechItem>
            </TechUsed>
          </Project>
          <Project>
          <ArrowLink href="#" target="_blank" rel="noopener noreferrer">
            Unity 3d Map Generator{" "}
            <FaArrowRight
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                color: "#057bf7",
                position: "absolute",
                right: "0px",
                top: "5px",
                
              }}
            />
            </ArrowLink>
            <ProjectDescription>
              Small React project created during an interview process to browse
              and search surf videos via the YouTube API.
            </ProjectDescription>
            <TechUsed>
              <TechItem>Unity</TechItem>
              <TechItem>C#</TechItem>
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
          <FooterLink href="https://www.linkedin.com/in/cameron-cronheimer-ab3a47165/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </FooterLink>
          <FooterLink href="https://github.com/ccronheimer" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </FooterLink>
        </FooterLinks>
      </TheFooter>
    </ThemeProvider>
  );
};

export default Home;

const IconLink = styled.a`
 font-size: 1.6em;
 color: #057bf7;
 text-decoration: none;
 transition: all .15s ease-in-out; 
 :hover { 
   transform: scale(1.2); 
   }
`;
const ProjectLinks = styled.div`
 display: flex;
justify-content: space-between;
width: 100px;
font-size: 1.5em;
align-items: center;
`;
const BoldLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: "Helvetica Neue Bold";
  display: inline-block;
  position: relative;
 
  :after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
 :hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`;
const FooterLink = styled.a`
  position: relative;
  display: inline-block;
  color: #057bf7 !important;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 15px;
  outline: 0;
  text-decoration: none;
  transition: all .15s ease-in-out; 
 :hover { 
   transform: scale(1.2); 
   }
`;
const FooterLinks = styled.div`
  font-size: 2.25em;
  @media screen and (max-width: 630px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
 
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
  width: 300px;
  font-family: "SF Mono Bold";
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
  font-family: "SF Mono Bold";
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 3px;
  color: #057bf7;
  border: 1px solid #057bf7;
  background: 0 0;
`;
const TechUsed = styled.div``;

const ProjectDescription = styled.p`
  line-height: 1.5;
  opacity: 60%;
  font-family: "Helvetica Neue";
  color: white;
`;

const ProjectName = styled.div`
  font-family: "Helvetica Neue Bold";
  color: white;
  font-size: 1.1em;
  display: block;
  @media screen and (max-width: 630px) {
    margin-bottom: 10px;
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
const MoreProjectName = styled.a`
   -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  font-family: "Helvetica Neue Bold";
  display: block;
  background-color: transparent;
  white-space: nowrap;
  font-size: 1.1rem;
  text-decoration: none;
  color: white;
  position: relative;
  margin-bottom: 10px;
  padding-right: 30px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    display: block;
    font-size: 1em;
  }
  &:hover {
    padding-right: 40px;
  }
`;
const ProjectCaption = styled.figcaption`
  display: block;
  width: 200px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-left: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 25px;
    margin-left: 0;
  }
`;
const FeaturedProjectDescription = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 0;
  margin-bottom: 25px;
  font-family: "Helvetica Neue";
  opacity: 60%;
`;
const ProjectPic = styled.video`
  @media screen and (max-width: 768px) {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Project1 = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 100px;
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
  color: white;
  position: relative;
  
  padding-right: 30px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    padding-right: 30px;
  }
  &:hover {
    padding-right: 40px;
  }
 
`;
const JobPosition = styled.div`
  font-size: 1rem;
  font-family: "Helvetica Neue";
  opacity: 60%;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
const JobTime = styled.div`
  font-size: 0.85rem;
  font-family: "SF Mono Bold";
  margin-top: 5px;
  color: white;
  opacity: 60%;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
const JobCompany = styled.div`
  text-decoration: none;
  font-size: 1.1rem;
  color: white;
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
  color: white;
  opacity: 60%;
`;
const SkillsCategoryLabel = styled.div`
  font-family: "Helvetica Neue Bold";
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
  line-height: 1.5;
  /* Change fontweight to 700 for bold */
  @media screen and (max-width: 768px) {
    padding-top: 30px;
    padding-left: 50px;
  }
  @media screen and (max-width: 480px) {
    
    padding-left: 20px;
    padding-right: 20px;
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
  font-size: 1.1em;
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
  font-weight: 400;
  opacity: 60%;
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
  text-decoration: none;
  -webkit-box-shadow: inset 0px -4px 0 #057bf7;
  box-shadow: inset 0px -4px 0px #057bf7;
  padding-bottom: 4px;
  color: white;
  font-family: "SF Mono Bold";
  &:hover {
    box-shadow: inset 0 -40px 0 0 #057bf7;
  }
`;

const IntroTagLine = styled.h1`
  max-width: 700px;
  display: block;
  font-size: 2.3em;
  color: white;
  line-height: 1.5;
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
  line-height: 1.5;
  font-family: "Helvetica Neue";
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;
const SecondaryText = styled.span`
  opacity: 60%;
`;
const Intro = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40vh;
`;