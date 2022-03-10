import React, { useState } from 'react';
import styled from "styled-components";
import Calendar from 'react-calendar'
import Footer from "../../shared/Footer";

const Header1 = styled.div`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 109%;
    letter-spacing: -2px;
    color: #232323;
`;

const Header2 = styled.div`
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.1em;
    color: #232323;
`;

const Text = styled.div`
    font-family: 'Outfit', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 133%;
    letter-spacing: 1px;
    color: #000000;
`;

const Booking = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <div>
                        <Calendar value={date} onChange={setDate} />
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <Header2>SHOWROOM BOOKING</Header2>
                    <Header1>When are you free?</Header1>
                    <Text>Choose a day for your showroom</Text>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Booking;
