import React from 'preact/compat';

const TextArea = ({onChange, label, value}) => {

    const localOnChange = (e) => {
        onChange(e.target.value)
    };

    return (
        <div className='my-input'>
            <div className='label'>
                {label}
            </div>
            <textarea className='input' onChange={localOnChange} cols="10" rows="20" value={value}/>
        </div>
    );
};

export default TextArea;
