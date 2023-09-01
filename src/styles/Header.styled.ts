import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #000;
`;
export const HeaderLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 30px;
    font-weight: 700;
`;
