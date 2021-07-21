import React from 'react'
import GlobalFonts from './fonts/fonts';

import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import SusAdventure from "./components/SusAdventure";
import Home from "./components/Home";
import Games from "./components/Games";
import PrivacySus from './components/PrivacySus';
import PrivacyColoring from './components/PrivacyColoring';
import styled from "styled-components";

const App = () => {
    
    return (
        <Router>
        <>
            <Switch> 
                <Route path="/games" component={Games}/>
                <Route path="/susadventure/privacy" component={PrivacySus}/>
                <Route path="/coloringasmr/privacy" component={PrivacyColoring}/>
                <Route path="/susadventure" component={SusAdventure}/>
                <Route path="/" component={Home}/>
            </Switch>
            <GlobalFonts />
          </>
        </Router>
    )
}

export default App

