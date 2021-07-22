import React from 'react'
import styled from "styled-components";


const NavBar = () => {
    return (
        <>
        <Nav>
           <Left>
            <div>Cameron Cronheimer</div>
           </Left>
           <Right>
           <Resume>Resume</Resume>
           <div>cameroncronheimer@gmail.com</div>
           </Right>

        </Nav>
    </>
        
    )
}

const Resume = styled.div`
padding-right: 20px;

`;
const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    margin-left: 20px;
`;

const Left = styled.nav`

`;
const Right = styled.div`
    display: flex;
    justify-content: space-between;


`;


export default NavBar;




