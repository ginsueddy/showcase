import styled from 'styled-components';
import { ChevronDown } from '@styled-icons/feather';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Header = styled.h1`
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

const Button = styled.button``;

const Footer = styled.div`

`;

const Home = () => {
    const { height, width } = useWindowDimensions();
    
    return (
        <>
            <div style={{ height: height * .95 }}>
                <div style={{}}>
                    <Header style={{ textAlign: 'center' }}>Your perfect</Header>
                    <HighlightedHeader style={{ textAlign: 'center' }}>Friday night</HighlightedHeader>
                    <Header style={{ textAlign: 'center' }}>is waiting</Header>
                </div>
                <Text style={{ textAlign: 'center' }}>Tell us what you love,</Text>
                <Text style={{ textAlign: 'center' }}>be with who you love</Text>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 80, border: '5px solid black', }}>
                        <Button />
                    </div>
                    <ChevronDown size="48" title="view more" />
                </div>
            </div>
            <div style={{ height: height * .9, paddingLeft: '10%' }}>
                <div style={{}}>
                    <Header style={{ textAlign: 'start' }}>We're throwing a</Header>
                    <HighlightedHeader style={{ color: '#E69C57'}}>party for you</HighlightedHeader>
                </div>
                <Text style={{ textAlign: 'start' }}>Personalize your entertainment profile -</Text>
                <Text style={{ textAlign: 'start' }}>we'll curate a Showroom experience for</Text>
                <Text style={{ textAlign: 'start' }}>{'you & up to 9 friends'}</Text>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: 80, border: '5px solid black', }}>
                        <Button />
                    </div>
                </div>
            </div>
            <Header>music, food, gaming, art, jewerly, dance, skincare, cocktails, fashion, photography, local, crafts, live</Header>
            <div style={{ height: height * .9, paddingRight: '12%' }}>
                <div style={{}}>
                    <HighlightedHeader style={{ color: '#5DA27D', textAlign: 'end' }}>Discover indie</HighlightedHeader>
                    <Header style={{ textAlign: 'end' }}>vendors you'll love</Header>
                </div>
                <Text style={{ textAlign: 'end' }}>We partner with up-and-coming</Text>
                <Text style={{ textAlign: 'end' }}>creators to help you find your</Text>
                <Text style={{ textAlign: 'end' }}>new favorite thing.</Text>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <div style={{ width: 80, border: '5px solid black', }}>
                        <Button />
                    </div>
                </div>
            </div>
            <div style={{ width, height: height * .2 }}>
                <div style={{ paddingLeft: '5%', paddingRight: '3%'}}>
                    <HighlightedHeader style={{ fontSize: 36 }}>SHW/RM</HighlightedHeader>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '18%', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 14 }}>Contact Us</Text>
                            <Text style={{ fontSize: 14 }}>FAQ</Text>
                            <Text style={{ fontSize: 14 }}>Instagram</Text>
                        </div>
                        <Text style={{ fontSize: 14 }}>Designed in Seattle, WA</Text>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '15%', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 14 }}>Privacy - Terms</Text>
                            <Text style={{ fontSize: 14 }}>&copy; 2022</Text>
                        </div>
                    </div>
                </div>
                {/* <div style={{ backgroundColor: '#5DA27D', width, height: height * .2, position: 'fixed', bottom: 0 }}/> */}
            </div>
        </>
    );
};

export default Home;