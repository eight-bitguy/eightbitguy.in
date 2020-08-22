import React from 'preact/compat';

const MyInput = ({onChange, value, label, name}) => {

    const localOnChange = (e) => {
        onChange(name, e.target.value)
    };

    return (
        <div className='my-input'>
            <div className='label'>
                {label}
            </div>
            <input className='input' onChange={localOnChange} value={value} />
        </div>
    );
};

export default MyInput;
