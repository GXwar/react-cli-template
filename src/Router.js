import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Calculator from './components/Calculator.js';
import Clock from './components/Clock.js';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/calculator" component={Calculator} />
                <Route path="/clock" component={Clock} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;