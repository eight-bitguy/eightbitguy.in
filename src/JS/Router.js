import React from 'preact/compat';
import Router from 'preact-router';
import Url from './Url';
import Landing from "../Pages/Landing/Landing";
import Contact from "../Pages/Contact";
import Thanks from "../Pages/Thanks";

const MyRouter = () => {
    return (
        <div className='router'>
            <Router>
                    <Landing path={Url.HOME} />
                    <Contact path={Url.CONTACT} />
                    <Thanks path={Url.THANKS} />
            </Router>
        </div>
    );
};

export default MyRouter;
