import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Url from './Url';
import Landing from "../Pages/Landing";


const Router = () => {
    return (
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path={Url.HOME} component={Landing} />
                </Switch>
            </main>
        </BrowserRouter>

    );
};

export default Router;
