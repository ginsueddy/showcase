import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Header from '../../shared/Header';
import Footer from "../../shared/Footer";
import LoadingSpinner from '../../shared/LoadingSpinner';
import Itinerary from '../Itinerary';

const logisticsQuiz = [
    {
        question: 'Where are you going?',
        responseType: 'select',
        stage: 'eventDetails',
        options: ['University District', 'Capitol Hill', 'Ballard', 'Fremont', 'International District', 'I don\'t know yet']
    },
    {
        question: 'What time are you going?',
        responseType: 'select',
        stage: 'eventDetails',
        options: ['Morning (8am-12pm)', 'Day (12pm-4pm)', 'Evening (4pm-8pm)', 'Late Night (8pm-12am)', 'I don\'t know yet']
    },
    {
        question: 'What\'s your budget?',
        responseType: 'select',
        stage: 'eventDetails',
        options: ['N/A', '$', '$$', '$$$', '$$$$', 'I don\'t know yet']
    },
    {
        question: 'You\'re almost there!',
        responseType: 'summary',
        stage: 'eventDetails'
    },
    {
        question: 'How active are you?',
        responseType: 'select',
        stage: 'preferences',
        options: ['I\'m always outdoors', 'It depends on the day', 'I\'m active with friends', 'I prefer to stay in']
    },
    {
        question: 'What\'s your favorite way to spend free time?',
        responseType: 'select',
        stage: 'preferences',
        options: ['Trying a new restaurant', 'See what\'s new on Netflix', 'Reading a good book', 'Spending time outside', 'Something else']
    },
    {
        question: 'What\'s your sign?',
        responseType: 'select',
        stage: 'preferences',
        options: ['Aries', 'Libra', 'Aquarius', 'Scorpio', 'Taurus', 'Capricorn', 'Gemini', 'Virgo', 'Cancer', 'Saggitarius', 'I don\'t know']
    },
    {
        question: 'What genre of music do you listen to?',
        responseType: 'select',
        stage: 'preferences',
        options: ['Pop // Top 50', 'Country Pop', 'EDM', 'HipHop // Rap', 'Something else']
    },
    {
        question: 'Hang tight! We\'re making your plans',
        responseType: 'summary',
        stage: 'itinerary'
    }
];

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

const QuizOption = ({ text, onClick }) => {
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
            onClick={onClick}
        >
            <Text style={{ color: hovered ? 'white' : 'black' }}>{text}</Text>
        </div>
    );
};

const Logistics = () => {
    const { height, width } = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [showItinerary, setShowItinerary] = useState(false);

    useEffect(() => {
        if (index === logisticsQuiz.length - 1) {
            setTimeout(() => {
                setShowItinerary(true);
            }, 3000)
        }

    }, [index])
    
    return (
        <>
            <Header />
            {
                showItinerary ? (
                    <Itinerary />
                ) : (
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: 24, height: height * 0.7 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: width * 0.75, marginBottom: 40 }}>
                            <Text style={{ fontSize: 20, fontWeight: logisticsQuiz[index].stage === 'eventDetails' ? 'bold' : 'normal' }}>1. Event Details</Text>
                            <Text style={{ fontSize: 20, fontWeight: logisticsQuiz[index].stage === 'preferences' ? 'bold' : 'normal' }}>2. Preferences</Text>
                            <Text style={{ fontSize: 20, fontWeight: logisticsQuiz[index].stage === 'itinerary' ? 'bold' : 'normal' }}>3. Your Custom Itinerary</Text>
                        </div>
                        <HeaderText>{logisticsQuiz[index].question}</HeaderText>
                        {
                            logisticsQuiz[index].options && (
                                <div style={{ marginTop: 16 }}>
                                    {
                                        logisticsQuiz[index].options.map((option) => <QuizOption text={option} onClick={() => setIndex(index + 1)} />)
                                    }
                                </div>
                            )
                        }
                        {
                            (logisticsQuiz[index].responseType === 'summary' && logisticsQuiz[index].stage === 'eventDetails') && (
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <Text style={{ fontWeight: 'lighter' }}>Fremont, Saturday, March 12th, 10am - 2pm, $$$ Budget</Text>
                                    <Text style={{ fontWeight: 'lighter' }}>Now that we've got your logistics down, we'll ask you a couple questions about your preferences and what you like to do for fun!</Text>
                                    <QuizOption text="Let's do it" onClick={() => setIndex(index + 1)} />
                                </div>
                            )
                        }
                        {
                            (logisticsQuiz[index].responseType === 'summary' && logisticsQuiz[index].stage === 'itinerary') && (
                                <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <Text style={{ fontWeight: 'lighter' }}>Thanks for answering our questions! Sit back while we put together your custom itinerary.</Text>
                                    <LoadingSpinner />
                                </div>
                            )
                        }
                    </div>
                )
            }
            <Footer />
        </>
    );
};
// party.js
export default Logistics;
