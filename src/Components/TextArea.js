import React from 'preact/compat';
import {useCallback} from 'preact/hooks';

const TextArea = ({onChange, label, value}) => {
    const localOnChange = useCallback((e) => {
        onChange(e.target.value)
    }, [onChange]);

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
