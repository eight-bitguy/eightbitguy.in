import React, {useEffect} from 'react';
import initialiseBackground from "../Components/background";

const Landing = () => {

    useEffect(() => {
        initialiseBackground()
    }, []);

    return (
        <div className='landing' id='background-div'>
            <div className='heading'>
                <div className='line-1'>Hello, I am</div>
                <div className='line-2'>Sandal Jain</div>
                <div className='line-3'>Developer | DevOps</div>
            </div>
        </div>
    );
};

export default Landing;
