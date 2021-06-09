import React from 'react'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import SusAdventure from "./components/SusAdventure";
import Home from "./components/Home";
import Games from "./components/Games";
import Privacy from './components/Privacy';

const App = () => {
    
    return (
        <Router>
           
            <Switch> 
                <Route path="/games" component={Games}/>
                <Route path="/susadventure/privacy" component={Privacy}/>
                <Route path="/susadventure" component={SusAdventure}/>
                
                <Route path="/" component={Home}/>
            </Switch>
          
        </Router>
    )
}

export default App
