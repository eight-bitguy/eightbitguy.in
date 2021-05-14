import React from 'preact/compat';
import {useState} from "preact/hooks";
import {route} from "preact-router";
import Url from "../JS/Url";
import DownloadIcon from "../Images/DownloadIcon";
import Line from "../Components/line";
import InputWithoutLabel from "../Components/InputWithoutLabel";
import MyButton from "../Components/MyButton";
import BackButton from "../Images/backbutton";

const onClick = () => {
    route(Url.HOME)
};

const Resume = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const sendResume = () => {
        if (loading || !email) {
            return;
        }

        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
        // setLoading(false);
    };

    return (
        <div className='resume-container' style={{height: '100vh'}}>
            <div className='row-0'>
                <div className='header-container'>
                    <BackButton onClick={onClick}/>
                </div>
            </div>
            <div className='row-1'>
                <div className='header-container'>
                    <DownloadIcon />
                </div>
            </div>
            {/*<Line width='50' />*/}
            {/*<div className='row-2'>*/}
            {/*    <InputWithoutLabel name='email' onChange={(e, v) => setEmail(v)} value={email}/>*/}
            {/*    <MyButton label='email me' onClick={sendResume} loading={loading} additionalCss='small'/>*/}
            {/*</div>*/}
        </div>
    );
};

export default Resume;
