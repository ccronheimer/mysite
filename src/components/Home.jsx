import React from "react";
import styled from "styled-components";
import Car from "../video/s.mp4";

const Home = () => {
  return (
    <>
      <Text>Cameron Cronheimer</Text>

      <Container>
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

const Container = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    max-width: 1000px;
    flex-wrap: wrap;
    background-color: red;
    justify-content: center;
    
    
`;
const VideoCard = styled.div`
    padding: 10px;
    margin: 10px;

`;
const Text = styled.div`
  font-family: "SF Pro Rounded SemiBold";
  font-size: 24px;
  font-weight: 100px;
`;
