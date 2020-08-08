import React from 'preact/compat';
import {route} from "preact-router";
import BackButton from "../Images/backbutton";
import Url from "../JS/Url";

const onClick = () => {
    route(Url.HOME)
};

const Thanks = () => {
    return (
        <div className='thanks-container'>
            <div className='row-0'>
                <div className='header-container'>
                    <BackButton onClick={onClick}/>
                </div>
            </div>
            <div className='row-1'>
                Thanks for getting in touch, I will get back to you shortly !!
            </div>
        </div>
    );
};

export default Thanks;
