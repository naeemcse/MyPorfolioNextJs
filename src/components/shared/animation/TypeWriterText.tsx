'use client'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
type wordsType = string[];

type TypeWriterProps = {
    words: wordsType;
    cursor?: boolean;
};

const TypeWriterText = ({words=[],cursor=false}:TypeWriterProps) => {
    return (
        <>
            <Typewriter words={words} loop={ true } cursor={cursor} />
        </>

    );
};

export default TypeWriterText;