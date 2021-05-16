import React from 'preact/compat';
import {useEffect, useState} from "preact/hooks";

const Typist = (props) => {

    const INITIAL_DELAY = 1000;
    const TYPING_DELAY = 200;
    const BLINKING_CURSOR_DELAY = 500;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isIncreasing, setIsIncreasing] = useState(true);
    const [canStartTyping, setCanStartTyping] = useState(false);
    const [blinkCursor, setBlinkCursor] = useState(true);
    const [label, setLabel] = useState(props.label);

    const changeInitialDelay = () => {
        setCanStartTyping(true)
    };


    const updateIndex = () => {
        if (!canStartTyping) {
            return;
        }

        const newIndex = currentIndex + (isIncreasing ? 1 : -1);
        setCurrentIndex(newIndex);

        const canChangeDirection = newIndex >= (label.length+3) || newIndex <= 0;
        if (canChangeDirection) {
            setIsIncreasing(!isIncreasing);
        }

        const canChangeText = !isIncreasing && props.alternateText && canChangeDirection;
        if (canChangeText) {
            setLabel(label === props.alternateText ? props.label : props.alternateText);
        }
    };

    const updateBlinkingCursor = () => {
        setBlinkCursor(!blinkCursor);
    };

    useEffect(() => {
        const timer = setTimeout(changeInitialDelay, INITIAL_DELAY);
        return () => { clearTimeout(timer) };
    }, []);

    useEffect(() => {
        const timer = setTimeout(updateBlinkingCursor, BLINKING_CURSOR_DELAY);
        return () => { clearTimeout(timer) };
    }, [blinkCursor]);

    useEffect(() => {
        const timer = setTimeout(updateIndex, TYPING_DELAY);
        return () => { clearTimeout(timer) };
    });

    return (
        <div className='typist-container'>
            {label.slice(0, currentIndex)}<span className='text-cursor'>{blinkCursor ? '|' : ''}</span>
        </div>
    );
};

export default Typist;
