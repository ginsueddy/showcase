import styled from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const HighlightedHeader = styled.h1`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 10px;
    letter-spacing: -2px;
    color: #FFFFFF;
`;

const Text = styled.p`
    font-family: 'Outfit', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 133%;
    letter-spacing: 1px;
    color: #FFFFFF;
`;

const Footer = () => {
    const { height, width } = useWindowDimensions();

    return (
        <div style={{ width, height: height * .2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ width, height: height * .3, background: "linear-gradient(180deg, #FFFFFF, #5DA27D 60%)", position: 'absolute', zIndex: -1 }} />
            <div style={{ paddingLeft: '5%', paddingRight: '3%', paddingBottom: 4 }}>
                <HighlightedHeader style={{ fontSize: 36 }}>cultured // seattle</HighlightedHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '18%', justifyContent: 'space-between' }}>
                        <Text>Contact Us</Text>
                        <Text>FAQ</Text>
                        <Text>Instagram</Text>
                    </div>
                    <Text>Designed in Seattle, WA</Text>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '15%', justifyContent: 'space-between' }}>
                        <Text>Privacy - Terms</Text>
                        <Text>&copy; 2022</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
