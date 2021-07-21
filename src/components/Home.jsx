import React from "react";
import styled from "styled-components";
import Car from "../video/s.mp4"

const Home = () => {
    const videoSrc = Car;
    
  return(
       <>
      <Text>Cameron Cronheimer</Text>

      <VidCard> 
      <video width="320" autoPlay muted loop playsInline>
          <source src={Car} type="video/mp4"/>
      </video>
      </VidCard>
     
       </>
  ) 
};

export default Home;

const Text = styled.div`
  font-family: "SF Pro Rounded SemiBold";
  font-size: 24px;
  font-weight: 100px;
`;

const VidCard = styled.div`
  border-radius: 22px;
overflow: hidden;
-webkit-transform: translateZ(0);
box-shadow: 0 19px 51px 0 rgba(0,0,0,0.16), 0 14px 19px 0 rgba(0,0,0,0.07);
 width: 320px;

`;