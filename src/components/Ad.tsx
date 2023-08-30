import {Link} from 'react-router-dom';
import styled from 'styled-components';

const AdImage = () => {
    return (
        <Link to='https://www.wanted.co.kr/' target='_blank'>
            <AdImageStyled src='/assets/img/ad_image.png' alt='ad-image'></AdImageStyled>
        </Link>
    );
};

export default AdImage;

export const AdImageStyled = styled.img`
    width: 500px;
    height: 60px;
`;
