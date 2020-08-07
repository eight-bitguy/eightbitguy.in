import React from 'preact/compat';
import {useCallback} from 'preact/hooks';

const MyInput = (props) => {
    const onChange = useCallback((e) => {
        props.onChange(e.target.value)
    }, []);

    return (
        <div className='my-input'>
            <div className='label'>
                {props.label}
            </div>
            <input className='input' onChange={onChange} value={props.value}/>
        </div>
    );
};

export default MyInput;
