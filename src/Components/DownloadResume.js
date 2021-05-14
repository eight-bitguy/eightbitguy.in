import React from 'preact/compat';
import DownloadIcon from "../Images/DownloadIcon";

const DownLoadResume = () => {
    return (
        <div>
            <button className='my-button'>
                <div className='download-resume-button'>
                    <DownloadIcon /> <span>Resume</span>
                </div>
            </button>
        </div>
    );
};

export default DownLoadResume;
