import React from 'preact/compat';

const Card = (props) => {
    return (
        <div className='card'>
            <div className='icon'>
                {props.getIcon()}
            </div>
            <p className='label'>{props.label}</p>
        </div>
    );
};

export default Card;
