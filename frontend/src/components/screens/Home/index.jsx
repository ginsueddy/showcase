import styled from 'styled-components';
import { ChevronDown } from '@styled-icons/feather';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

const HeaderText = styled.h1`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 97%;
    letter-spacing: -2px;
    color: #232323;
`;

const HighlightedHeader = styled.h1`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 97%;
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
            <Header />
            <div style={{ height: height * .95 }}>
                <div style={{}}>
                    <HeaderText style={{ textAlign: 'center' }}>Your perfect</HeaderText>
                    <HighlightedHeader style={{ textAlign: 'center' }}>Friday night</HighlightedHeader>
                    <HeaderText style={{ textAlign: 'center' }}>is waiting</HeaderText>
                </div>
                <Text style={{ textAlign: 'center' }}>Tell us what you love,</Text>
                <Text style={{ textAlign: 'center' }}>be with who you love</Text>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Link to="/booking" style={{ textDecoration: 'none' }}>
                        <Button text="RSVP NOW"/>
                    </Link>
                    <ChevronDown size="48" title="view more" />
                </div>
            </div>
            <div style={{ height: height * .9, paddingLeft: '10%' }}>
                <div style={{}}>
                    <HeaderText style={{ textAlign: 'start' }}>We're throwing a</HeaderText>
                    <HighlightedHeader style={{ color: '#E69C57'}}>party for you</HighlightedHeader>
                </div>
                <Text style={{ textAlign: 'start' }}>Personalize your entertainment profile -</Text>
                <Text style={{ textAlign: 'start' }}>we'll curate a Showroom experience for</Text>
                <Text style={{ textAlign: 'start' }}>{'you & up to 9 friends'}</Text>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Link to="/booking" style={{ textDecoration: 'none' }}>
                        <Button text="LEARN MORE"/>
                    </Link>
                </div>
            </div>
            <HeaderText>music, food, gaming, art, jewerly, dance, skincare, cocktails, fashion, photography, local, crafts, live</HeaderText>
            <div style={{ height: height * .9, paddingRight: '12%' }}>
                <div>
                    <HighlightedHeader style={{ color: '#5DA27D', textAlign: 'end' }}>Discover indie</HighlightedHeader>
                    <HeaderText style={{ textAlign: 'end' }}>vendors you'll love</HeaderText>
                </div>
                <Text style={{ textAlign: 'end' }}>We partner with up-and-coming</Text>
                <Text style={{ textAlign: 'end' }}>creators to help you find your</Text>
                <Text style={{ textAlign: 'end' }}>new favorite thing.</Text>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Link to="/booking" style={{ textDecoration: 'none' }}>
                        <Button text="GET STARTED"/>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;