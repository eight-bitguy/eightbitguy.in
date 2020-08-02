import React from 'react';

const MyButton = (props) => {
    return (
        <button className='my-button' onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default MyButton;
