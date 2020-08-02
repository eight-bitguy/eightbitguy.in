import React from 'preact/compat';
import {useCallback, useState} from 'preact/hooks';
import MyInput from "../Components/MyInput";
import TextArea from "../Components/TextArea";
import MyButton from "../Components/MyButton";
import { route } from 'preact-router';
import Url from "../JS/Url";

const RenderHeader = () => {
    const onClick = useCallback(() => {
        route(Url.HOME)
    }, []);

    return (
        <div className='header'>
            <div>
                <MyButton label='Close' onClick={onClick}/>
            </div>
        </div>
    );
};

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div>
            <div>
                {RenderHeader()}
            </div>
            <div className='contact'>
                <div className='row-1'>
                    <MyInput label='Name' onChange={setName} value={name}/>
                    <MyInput label='Email' onChange={setEmail} value={email}/>
                </div>
                <div className='row-2'>
                    <TextArea label='Message' onChange={setMessage} value={message}/>
                </div>
                <div className='row-3'>
                    <MyButton label='Submit' onClick={() => {}}/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
