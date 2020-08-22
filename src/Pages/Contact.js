import React from 'preact/compat';
import {useState} from 'preact/hooks';
import {route} from "preact-router";
import MyInput from "../Components/MyInput";
import TextArea from "../Components/TextArea";
import MyButton from "../Components/MyButton";
import BackButton from "../Images/backbutton";
import Url from "../JS/Url";
import EmailHelper from "../JS/emailHelper";
import Message from "../Models/Message";

const onClick = () => {
    route(Url.HOME)
};

const Contact = () => {
    const [messageInfo, _setMessageInfo] = useState(new Message());
    const [loading, setLoading] = useState(false);

    const setMessageInfo = (attribute, value) => {
        messageInfo.set(attribute, value);
        _setMessageInfo(messageInfo);
    };

    const onSubmit = async () => {
        if (loading || !messageInfo.validate()) {
            return;
        }

        const emailHelper = new EmailHelper(messageInfo);
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
                    <MyInput label='Name' name='name' onChange={setMessageInfo} value={messageInfo.get('name')}/>
                    <MyInput label='Email' name='email' onChange={setMessageInfo} value={messageInfo.get('email')}/>
                </div>
                <div className='row-2'>
                    <TextArea label='Message' name='message' onChange={setMessageInfo} value={messageInfo.get('message')}/>
                </div>
                <div className='row-3'>
                    <MyButton label='Submit' onClick={onSubmit} loading={loading}/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
