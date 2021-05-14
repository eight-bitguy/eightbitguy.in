import React from 'preact/compat';
import DownloadIcon from "../Images/DownloadIcon";

const DownLoadResume = () => {
    return (
            <div className="download-resume-button-container">
                <button className='my-button'>
                    <a type="button" href='./Sandal_Jain.pdf' download>
                        <div className='download-resume-button'>
                            <DownloadIcon /> Resume
                        </div>
                    </a>
                </button>
            </div>
    );
};

export default DownLoadResume;
