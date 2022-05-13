import React, { useState } from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Header from '../../shared/Header';
import Footer from "../../shared/Footer";

const HeaderText = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 76%;
    text-align: center;
    letter-spacing: 1px;
`;

const Text = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 4px;
    text-align: center;
    letter-spacing: 1px;
`;

const QuizOption = ({ text }) => {
    const [hovered, setHoverd] = useState(false);

    return (
        <div
            style={{ 
                border: '1.5px solid #5DA27D',
                backgroundColor: hovered ? '#5DA27D' : 'white',
                borderRadius: 20,
                width: '25em',
                height: '3em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 24
            }}
            onMouseEnter={() => setHoverd(!hovered)}
            onMouseLeave={() => setHoverd(!hovered)}
        >
            <Text style={{ color: hovered ? 'white' : 'black' }}>{text}</Text>
        </div>
    );
};

const Logistics = () => {
    const { height, width } = useWindowDimensions();

    return (
        <>
            <Header />
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: width * 0.75, marginBottom: 40 }}>
                        <Text style={{ fontSize: 20 }}>1. Event Details</Text>
                        <Text style={{ fontSize: 20 }}>2. Preferences</Text>
                        <Text style={{ fontSize: 20 }}>3. Your Custom Itinerary</Text>
                    </div>
                    <HeaderText>Where are you going?</HeaderText>
                    <div style={{ marginTop: 16 }}>
                        <QuizOption text="University District" />
                        <QuizOption text="Capitol Hill" />
                        <QuizOption text="Ballard" />
                        <QuizOption text="Fremont" />
                        <QuizOption text="International District" />
                        <QuizOption text="I don't know yet" />
                    </div>
                </div>
            <Footer />
        </>
    );
};
// party.js
export default Logistics;
