import React from 'preact/compat';
import {useState} from 'preact/hooks';
import {route} from "preact-router";
import MyInput from "../Components/MyInput";
import TextArea from "../Components/TextArea";
import MyButton from "../Components/MyButton";
import BackButton from "../Images/backbutton";
import Url from "../JS/Url";
import EmailHelper from "../JS/emailHelper";

const onClick = () => {
    route(Url.HOME)
};

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        if (loading) {
            return;
        }

        const emailHelper = new EmailHelper(name, email, message);
        setLoading(true);
        await emailHelper.sendEmail();
        setLoading(false);
        route(Url.THANKS);
    };

    return (
        <div>
            <div className='contact'>
                <div className='row-0'>
                    <div className='header-container'>
                        <BackButton onClick={onClick}/>
                    </div>
                </div>
                <div className='row-1'>
                    <MyInput label='Name' onChange={setName} value={name}/>
                    <MyInput label='Email' onChange={setEmail} value={email}/>
                </div>
                <div className='row-2'>
                    <TextArea label='Message' onChange={setMessage} value={message}/>
                </div>
                <div className='row-3'>
                    <MyButton label='Submit' onClick={onSubmit} loading={loading}/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
