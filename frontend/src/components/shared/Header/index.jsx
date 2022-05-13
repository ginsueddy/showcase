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
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
`;

const ButtonText = styled.div`
    font-family: 'Syne';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
    color: #3E372D;
`;


const Header = ({ isLanding }) => {
    const { height, width } = useWindowDimensions();

    return (
        <div style={{ width, height: height * .1 }}>
            <div style={{ paddingLeft: '5%', paddingRight: '3%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <HighlightedHeader style={{ fontSize: 36 }}>cultured</HighlightedHeader>
                    <HighlightedHeader style={{ fontSize: 36, marginTop: -20 }}>// seattle</HighlightedHeader>
                </div>
                {
                    isLanding && (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', width: '18%', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 14, paddingLeft: 16, paddingRight: 16 }}>ABOUT</Text>
                                <Text style={{ fontSize: 14, paddingLeft: 16, paddingRight: 16  }}>FAQ</Text>
                                <div onClick={() => console.log()} style={{ borderWidth: '1.5px', borderStyle: 'solid', borderColor: '#C7CBC7', backgroundColor: 'white', marginLeft: 16, marginRight: 24, paddingLeft: 32, paddingRight: 32, paddingTop: 4, paddingBottom: 4, borderRadius: 30, display: 'flex', alignItems: 'center' }}>
                                    <ButtonText>LOGIN</ButtonText>
                                </div>
                                <div onClick={() => console.log()} style={{ backgroundColor: '#DEC6AF', paddingLeft: 24, paddingRight: 24, paddingTop: 4, paddingBottom: 4, borderRadius: 30, display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                                    <ButtonText style={{ color: 'white' }}>EXPLORE NOW</ButtonText>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Header;
