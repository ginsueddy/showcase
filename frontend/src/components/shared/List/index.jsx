import styled from 'styled-components';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const Text = styled.div`
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1px;
`;


const List = ({ listItems }) => {
    const { height, width } = useWindowDimensions();

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: 12, alignItems: 'center', display: 'flex', flexDirection: 'column', paddingTop: 12 }}>
                {
                    listItems.map((item, index) => {
                        return (
                            <>
                                <div style={{ width: 12, height: 12, backgroundColor: '#E69C57', borderRadius: 6 }} />
                                {
                                    index !== listItems.length - 1 && (
                                        <div style={{ width: 1, height: 48, backgroundColor: 'black' }} />
                                    )
                                }
                            </>
                        )
                    })
                }
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 24 }}>
                {
                    listItems.map((item, index) => <Text style={{ marginBottom: index === listItems.length - 1 ? 0 : 28}}>{item}</Text>)
                }
            </div>
        </div>
    );
};

export default List;
