import {Link} from 'react-router-dom';
import styled from 'styled-components';

const AdImage = () => {
    return (
        <AdImageStyled>
            <Link to='https://www.wanted.co.kr/' target='_blank'>
                <img src='/assets/img/ad_image.png' alt='ad-image'></img>
            </Link>
        </AdImageStyled>
    );
};

export default AdImage;

export const AdImageStyled = styled.div`
    /* width: 200px; */
    img {
        height: 60px;
        margin: 10px auto;
        display: flex;
        align-items: center;
    }
    border-bottom: 1px solid var(--listBorder);
`;
