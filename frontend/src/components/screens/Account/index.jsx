import React from 'react';
import styled from 'styled-components';
import Header from '../../shared/Header';
import Footer from "../../shared/Footer";

const HeaderText = styled.div`
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    letter-spacing: 1px;
    color: #5DA27D;
`;

const Text = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 1px;
`;

const ButtonText = styled.div`
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
`;

const ItinearyCard = ({ }) => {
    return (
        <div
            style={{ display: 'flex', border: '1.5px solid #5DA27D', borderRadius: 20, paddingLeft: 32, paddingTop: 18, paddingRight: 32, paddingBottom: 32, marginBottom: 40 }}
        >
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                    <Text style={{ fontSize: 24, fontWeight: 400, marginRight: 28 }}>April 6th, 2022</Text>
                    <Text>Fremont, 4pm-8pm, $$$ Budget</Text>
                </div>
                <Text>El Camino, Fremont Vintage Mall, and Olivia Rodrigo @ Wamu Theater</Text>
            </div>
            <div style={{ paddingLeft: 36 }}>
                <div onClick={() => console.log()} style={{ backgroundColor: '#E69C57', paddingLeft: 24, paddingRight: 24, paddingTop: 8, paddingBottom: 8, borderRadius: 30, display: 'flex', alignItems: 'center', alignSelf: 'baseline' }}>
                    <ButtonText style={{ color: 'white' }}>VIEW</ButtonText>
                </div>
            </div>
        </div>
    );
};

const Account = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', flex: 1, paddingBottom: 40, paddingLeft: 32, paddingRight: 32 }}>
                <div>
                    <HeaderText>Krystal's Itinerary History</HeaderText>
                    <div style={{ display: 'flex' , justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid black', marginBottom: 32, marginTop: 32 }}>
                        <Text style={{ fontWeight: 300, fontSize: 24 }}>Itineraries</Text>
                        <Text style={{ fontWeight: 500, fontSize: 24, color: '#5DA27D' }}>+ Make a new plan</Text>
                    </div>
                    <ItinearyCard />
                    <ItinearyCard />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Account;
