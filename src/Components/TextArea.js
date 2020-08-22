import React from 'preact/compat';

const TextArea = ({onChange, label, value, name}) => {

    const localOnChange = (e) => {
        onChange(name, e.target.value)
    };

    return (
        <div className='my-input'>
            <div className='label'>
                {label}
            </div>
            <textarea className='input' onChange={localOnChange} cols="10" rows="20" value={value} name={name} />
        </div>
    );
};

export default TextArea;
