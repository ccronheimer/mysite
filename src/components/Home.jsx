import React from "react";
import styled from "styled-components";
import Car from "../video/s.mp4";

const Home = () => {
  return (
    <>
      <Text>Cameron Cronheimer</Text>
       
       <WelcomeView>Hey I'm Cameron 👋🏼</WelcomeView>
       <DescriptText>Software Developer 📱</DescriptText>
        <CheckOutMyProjectsView>Check out my projects👇🏼</CheckOutMyProjectsView>
      <Container>
      <VideoCard><video width="250" autoPlay muted loop playsInline><source src={Car} type="video/mp4" /></video></VideoCard>
      <VideoCard><video width="250" autoPlay muted loop playsInline><source src={Car} type="video/mp4" /></video></VideoCard>
      <VideoCard><video width="250" autoPlay muted loop playsInline><source src={Car} type="video/mp4" /></video></VideoCard>
      <VideoCard><video width="250" autoPlay muted loop playsInline><source src={Car} type="video/mp4" /></video></VideoCard>
      <VideoCard><video width="250" autoPlay muted loop playsInline><source src={Car} type="video/mp4" /></video></VideoCard>
      <VideoCard><video width="250" autoPlay muted loop playsInline><source src={Car} type="video/mp4" /></video></VideoCard>
      <VideoCard><video width="250" autoPlay muted loop playsInline><source src={Car} type="video/mp4" /></video></VideoCard>
      <VideoCard><video width="250" autoPlay muted loop playsInline><source src={Car} type="video/mp4" /></video></VideoCard>

      </Container>
    </>
  );
};

export default Home;

const WelcomeView = styled.div`

text-align: center;
justify-content: center;
margin-top: 300px;
font-family: "SF Pro Rounded SemiBold";
font-size: 36px;

`;

const CheckOutMyProjectsView = styled.div`
font-family: "SF Pro Rounded";
font-size: 22px;
text-align: center;
margin-top: 200px;

`;
const DescriptText= styled.div`

text-align: center;
font-family: "SF Pro Rounded";
font-size: 22px;
`;
const Container = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    max-width: 1000px;
    flex-wrap: wrap;
    
    justify-content: center;
    
    
`;
const VideoCard = styled.div`
    padding: 10px;
    margin: 10px;

`;
const Text = styled.div`
  font-family: "SF Pro Rounded SemiBold";
`;
