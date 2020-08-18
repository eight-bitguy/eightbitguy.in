import React from 'preact/compat';

const MyInput = ({onChange, value, label}) => {

    const localOnChange = (e) => {
        onChange(e.target.value)
    };

    return (
        <div className='my-input'>
            <div className='label'>
                {label}
            </div>
            <input className='input' onChange={localOnChange} value={value}/>
        </div>
    );
};

export default MyInput;
