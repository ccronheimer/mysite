import React from "react";
import styled from "styled-components";
import Car from "../video/s.mp4"

const Home = () => {
    const videoSrc = Car;
    
  return(
       <>
      <Text>Cameron Cronheimer</Text>
      <video width="320" autoPlay muted loop playsInline>
          <source src={Car} type="video/mp4"/>
      </video>
       </>
  ) 
};

export default Home;

const Text = styled.div`
  font-family: "SF Pro Rounded SemiBold";
  font-size: 24px;
  font-weight: 100px;
`;
