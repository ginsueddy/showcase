import styled from 'styled-components';
import { ChevronDown } from '@styled-icons/feather';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import List from '../../shared/List';

const HeaderText = styled.h1`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 40px;
    letter-spacing: -2px;
    color: #232323;
`;

const HighlightedHeader = styled.h1`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 40px;
    letter-spacing: -2px;
    color: #E53552
`;

const Text = styled.p`
    font-family: 'Outfit', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 133%;
    letter-spacing: 1px;
    color: #000000;
`;

const ButtonText = styled.div`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 200%;
    text-align: center;
    letter-spacing: 1px;
    color: #3E372D;
`;

const Button = ({ text, onPress }) => {
    return (
        <div onClick={onPress} style={{ borderWidth: '1.5px', borderStyle: 'solid', borderColor: '#C7CBC7', backgroundColor: 'white', paddingLeft: 40, paddingRight: 40, paddingTop: 4, paddingBottom: 4, borderRadius: 30 }}>
            <ButtonText>{text}</ButtonText>
        </div>
    );
};

const Home = () => {
    const { height, width } = useWindowDimensions();
    
    return (
        <>
            <Header isLanding/>
            <div style={{ height: height * .9, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'space-evenly' }}>
                    <div>
                        <HeaderText style={{ textAlign: 'center' }}>The easiest way</HeaderText>
                        <HighlightedHeader style={{ marginTop: -15, marginBottom: -15, textAlign: 'center' }}>to explore</HighlightedHeader>
                        <HeaderText style={{ textAlign: 'center' }}>your city</HeaderText>
                    </div>
                    <Link to="/logistics" style={{ textDecoration: 'none' }}>
                        <Button text="LET'S GO"/>
                    </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 24 }}>
                    <Text style={{ textAlign: 'center', fontSize: 18 }}>Learn how it works</Text>
                    <ChevronDown size="48" title="view more" />
                </div>
            </div>
            <div style={{ height: height * .9, paddingLeft: '10%' }}>
                <div>
                    <HeaderText style={{ textAlign: 'start' }}>Make plans in a</HeaderText>
                    <HighlightedHeader style={{ color: '#E69C57'}}>brand new way</HighlightedHeader>
                </div>
                <Text style={{ textAlign: 'start' }}>Our interactive quiz learns about what you like </Text>
                <Text style={{ textAlign: 'start' }}>and builds a custom itinerary just for you.</Text>
                <div style={{ marginBottom: 40, paddingLeft: 12 }}>
                    <List listItems={['Tell us where you\'re going,', 'What you want to do,', 'Your budget and preferences', 'We\'ll handle the rest!']}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Link to="/logistics" style={{ textDecoration: 'none' }}>
                        <Button text="TAKE THE QUIZ"/>
                    </Link>
                </div>
            </div>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ flex: 1, paddingLeft: '5%' }}>
                        <HighlightedHeader style={{ color: '#5DA27D' }}>Discover hidden</HighlightedHeader>
                        <HeaderText style={{ }}>{'gems & local delights'}</HeaderText>
                    </div>
                    <div style={{ flex: 1, paddingRight: '2%' }}>
                        <Text style={{  }}>{`Struggling to make plans with friends? Tired of going to the same places?`}</Text>
                        <Text style={{ }}>{`We're the fastest & easiest way to plan a Friday night out or Sunday morning adventure.`}</Text>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 150, marginBottom: 150 }}>
                        <Link to="/logistics" style={{ textDecoration: 'none' }}>
                            <Button text="GET STARTED"/>
                        </Link>
                </div>
            </div>
            <HeaderText style={{ lineHeight: 1, fontWeight: 'bold', overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: -50 }}>music, food, gaming, local, parks, dance, skincare, arts, cocktails, fashion, photography, jewlery, local, crafts, live</HeaderText>
            <HeaderText style={{ lineHeight: 1, fontWeight: 'bold', overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: 150 }}>dessert, cocktails, arts, sightseeing, photography, fashion, local, music, food, gaming, arts, parks, crafts, live</HeaderText>
            <Footer />
        </>
    );
};

export default Home;