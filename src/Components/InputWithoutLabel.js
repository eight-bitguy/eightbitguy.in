import React from 'preact/compat';

const InputWithoutLabel = ({onChange, value, name}) => {

    const localOnChange = (e) => {
        onChange(name, e.target.value)
    };

    return (
        <div className='my-input'>
            <input className='input' onChange={localOnChange} value={value} />
        </div>
    );
};

export default InputWithoutLabel;
