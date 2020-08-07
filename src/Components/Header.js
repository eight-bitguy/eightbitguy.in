import React from 'preact/compat';
import {useCallback} from "preact/hooks";
import {route} from "preact-router";
import Url from "../JS/Url";
import BackButton from "../Images/backbutton";

const Header = () => {

    const onClick = useCallback(() => {
        route(Url.HOME)
    }, []);

    return (
        <div className='header'>
            <BackButton onClick={onClick}/>
        </div>
    );
};

export default Header;
