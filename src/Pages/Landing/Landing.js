import React from 'preact/compat';
import { route } from 'preact-router';
import MyButton from "../../Components/MyButton";
import Url from "../../JS/Url";
import DayTimeTechnologies from "./DayTimeTechnologies";
import NightTimeExplorer from "./NightTimeExplorer";
import Line from "../../Components/line";
import DownLoadResume from "../../Components/DownloadResume";
import Typist from "../../Components/Typist";
import InstagramIcon from "../../Images/InstagramIcon";
import LinkedInIcon from "../../Images/LinkedInIcon";
import CodeChefIcon from "../../Images/CodeChefIcon";
import AcmIcpcIcon from "../../Images/AcmIcpcIcon";

const toContact = () => route(Url.CONTACT);
const toResume = () => route(Url.RESUME);

const Landing = () => {
    return (
        <div className='landing-container'>
            <div className='header'>
                <DownLoadResume label='Resume' onClick={toResume}/>
                <MyButton label='Get in touch' onClick={toContact}/>
            </div>
            <div className='landing' id='background-div'>
                <div className='image-div'>
                    <img
                        rel="preload"
                        src={require('../../Images/sandal.jpg')}
                        className='my-image'
                        alt='Sandal Jain'
                    />
                </div>
                <div className='heading'>
                    <div className='line-2'>
                        <Typist label="Sandal Jain" alternateText="संदल जैन"/>
                    </div>
                    <div className='line-3'>5 years | full-stack | acm-icpc | curious</div>
                    <div className='line-4'>
                        <LinkedInIcon/>  | <InstagramIcon/> | <CodeChefIcon/> | <AcmIcpcIcon/>
                    </div>
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
