import React from 'preact/compat';
import Router from 'preact-router';
import Url from './Url';
import Landing from "../Pages/Landing";
import Contact from "../Pages/Contact";
import Thanks from "../Pages/Thanks";


const MyRouter = () => {
    return (
        <Router>
            <Landing path={Url.HOME} />
            <Contact path={Url.CONTACT} />
            <Thanks path={Url.THANKS} />
        </Router>
    );
};

export default MyRouter;
