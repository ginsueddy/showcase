import styled from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const HighlightedHeader = styled.h1`
    font-family: 'Syne', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 97%;
    letter-spacing: -2px;
    color: #000000
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

const Footer = () => {
    const { height, width } = useWindowDimensions();

    return (
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
    );
};

export default Footer;
