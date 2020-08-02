import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Url from './Url';
import Landing from "../Pages/Landing";
import Contact from "../Pages/Contact";


const Router = () => {
    return (
        <BrowserRouter>
            <main>
                <Switch>
                    <Route exact path={Url.HOME} component={Landing} />
                    <Route exact path={Url.CONTACT} component={Contact} />
                </Switch>
            </main>
        </BrowserRouter>

    );
};

export default Router;
