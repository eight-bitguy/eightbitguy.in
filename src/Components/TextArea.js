import React, {useCallback} from 'react';

const TextArea = (props) => {
    const onChange = useCallback((e) => {
        props.onChange(e.target.value)
    }, [props]);

    return (
        <div className='my-input'>
            <div className='label'>
                {props.label}
            </div>
            <textarea className='input' onChange={onChange} cols="10" rows="20" value={props.value}/>
        </div>
    );
};

export default TextArea;
