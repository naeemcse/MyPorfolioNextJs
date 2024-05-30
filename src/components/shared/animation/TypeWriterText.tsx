'use client'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
const TypeWriterText = ({words=[],cursor=false}) => {
    return (
        <>
            <Typewriter words={
               words} loop={ true } cursor={cursor} />
        </>

    );
};

export default TypeWriterText;