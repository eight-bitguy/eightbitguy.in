import React, {useCallback} from 'react';
import MyButton from "../Components/MyButton";
import Url from "../JS/Url";

const Landing = (props) => {
    const onClick = useCallback(() => {
        props.history.push(Url.CONTACT)
    }, [props]);

    console.log('landing');
    return (
        <div>
            <div>
                <div className='header'>
                    <div>
                        <MyButton label='Get in touch' onClick={onClick}/>
                    </div>
                </div>
            </div>
            <div className='landing' id='background-div'>
                <div className='image-div'>
                    <img src={require('./../Images/sandal.jpg')} height='270px' alt='sandal Jain'/>
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
