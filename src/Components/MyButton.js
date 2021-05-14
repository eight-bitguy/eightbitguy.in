import React from 'preact/compat';

const MyButton = (props) => {
    return (
        <button className={`my-button ${props.additionalCss || ''}`} onClick={props.onClick} disabled={props.loading}>
            {props.loading ? <div className='loader' /> : props.label}
        </button>
    );
};

export default MyButton;
