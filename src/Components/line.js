import React from 'preact/compat';

const Line = (props) => {
    return (
        <div className='line-container'>
            <div className={`line-${props.width ?? '100' }`}/>
        </div>
    );
};

export default Line;
