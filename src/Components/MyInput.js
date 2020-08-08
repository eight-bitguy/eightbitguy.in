import React from 'preact/compat';
import {useCallback} from 'preact/hooks';

const MyInput = ({onChange, value, label}) => {
    const localOnChange = useCallback((e) => {
        onChange(e.target.value)
    }, [onChange]);

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
