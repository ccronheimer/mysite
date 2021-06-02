import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import susadventure from './susadventure';

const App = () => {
    

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        cameroncronheimer.com
                    </Route>

                    <Route exact path="/susadventure">
                        <susadventure/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
