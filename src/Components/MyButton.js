import React from 'preact/compat';

const MyButton = (props) => {
    return (
        <button className='my-button' onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default MyButton;
