'use client'

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google'

const ProfessionsDisplay = ({ professions, typeSpeed = 150, deleteSpeed = 75, delay = 2000 }) => {
    const [currentProfession, setCurrentProfession] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let ticker;

        if (isDeleting) {
            ticker = setTimeout(() => {
                setCurrentProfession(current => current.substring(0, current.length - 1));
            }, deleteSpeed);
        } else {
            ticker = setTimeout(() => {
                setCurrentProfession(professions[loopNum].substring(0, index + 1));
                setIndex(index + 1);
            }, typeSpeed);
        }

        if (!isDeleting && currentProfession === professions[loopNum]) {
            setIsDeleting(true);
            ticker = setTimeout(() => {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setIndex(0);
            }, delay);
        }

        if (isDeleting && currentProfession === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(0);
        }

        if (loopNum >= professions.length) {
            setLoopNum(0);
        }

        return () => {
            clearTimeout(ticker);
        };
    }, [currentProfession, isDeleting, loopNum, index, professions, typeSpeed, deleteSpeed, delay]);

    return (
        <> 
            <Head> 
                <link rel="preconnect" href="https://fonts.googleapis.com"/>           
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Trade+Winds&display=swap" rel="stylesheet"/>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Fuggles&family=Trade+Winds&display=swap" rel="stylesheet"/> */}
            </Head>

            <h2 className="text-3xl text-center text-orange-400 " style={{fontFamily: "Trade Winds"}}>
                {currentProfession}
            </h2>
        </>
    );
};

export default ProfessionsDisplay;
