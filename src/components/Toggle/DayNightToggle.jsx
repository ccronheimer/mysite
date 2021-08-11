import React from 'react';
import "./Switch.css";

const DayNightToggle = ({ themeToggler }) => {

    return (
        <label className="switch">
            <input type="checkbox" onClick={themeToggler} checked/>
            <span className="slider round"/>
        </label>
    )
}



export default DayNightToggle
