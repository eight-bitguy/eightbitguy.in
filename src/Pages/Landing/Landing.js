import React from 'preact/compat';
import { route } from 'preact-router';
import MyButton from "../../Components/MyButton";
import Url from "../../JS/Url";
import DayTimeTechnologies from "./DayTimeTechnologies";
import NightTimeExplorer from "./NightTimeExplorer";
import Line from "../../Components/line";

const onClick = () => route(Url.CONTACT);

const Landing = () => {

    return (
        <div className='landing-container'>
            <div className='header'>
                <MyButton label='Get in touch' onClick={onClick}/>
            </div>
            <div className='landing' id='background-div'>
                <div className='image-div'>
                    <img src={require('../../Images/sandal.jpg')} className='my-image' alt='sandal Jain'/>
                </div>
                <div className='heading'>
                    <div className='line-2'>Sandal Jain</div>
                    <div className='line-3'>Developer | DevOps</div>
                </div>
            </div>
            <div className='padding-top-30'>
                <DayTimeTechnologies />
            </div>
            <div className='padding-top-20'>
                <Line/>
            </div>
            <div className='padding-top-20'>
                <NightTimeExplorer />
            </div>
        </div>
    );
};

export default Landing;
