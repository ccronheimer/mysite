import React, { useState } from 'react';
import "./Switch.css";

const DayNightToggle = ({ themeToggler }) => {

    const [check, setCheck] = useState(true);

    const checkToggler = () => {
        check === true ? setCheck(false) : setCheck(true);

    }
    return (
        <label className="switch">
            <input type="checkbox" checked={check} onClick={()=> {themeToggler(); checkToggler() }} />
            <span className="slider round"/>
        </label>
    )
}



export default DayNightToggle
