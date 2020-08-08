import React from 'preact/compat';
import {useCallback} from 'preact/hooks';
import { route } from 'preact-router';
import MyButton from "../Components/MyButton";
import Url from "../JS/Url";

const Landing = () => {
    const onClick = useCallback(() => {
        route(Url.CONTACT)
    }, []);

    return (
        <div className='landing-container'>
            <div className='header'>
                <MyButton label='Get in touch' onClick={onClick}/>
            </div>
            <div className='landing' id='background-div'>
                <div className='image-div'>
                    <img src={require('./../Images/sandal.jpg')} className='image' alt='sandal Jain'/>
                </div>
                <div className='heading'>
                    <div className='line-2'>Sandal Jain</div>
                    <div className='line-3'>Developer | DevOps</div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
