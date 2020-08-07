import React from 'preact/compat';

const MyButton = (props) => {
    return (
        <button className='my-button' onClick={props.onClick}>
            {props.loading ? <div className='loader' /> : props.label}
        </button>
    );
};

export default MyButton;
