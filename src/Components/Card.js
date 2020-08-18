import React from 'preact/compat';

const Card = (props) => {
    console.log(props);
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
