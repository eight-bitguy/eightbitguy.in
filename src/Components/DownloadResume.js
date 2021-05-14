import React from 'preact/compat';
import DownloadIcon from "../Images/DownloadIcon";

const DownLoadResume = () => {
    return (
            <div>
                <button className='my-button'>
                    <a type="button" className="download-resume-button-container" href='./Sandal_Jain.pdf' download>
                        <div className='download-resume-button'>
                            <DownloadIcon /> <span>Resume</span>
                        </div>
                    </a>
                </button>
            </div>
    );
};

export default DownLoadResume;
