import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e2e2e2;
    border-bottom: 3px solid #000;
`;
export const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    font-size: 24px;
`;
