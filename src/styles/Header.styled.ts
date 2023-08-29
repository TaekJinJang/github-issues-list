import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    height: 70px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 3px solid #000;
`;
export const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    font-size: 24px;
    margin: 0 0 0 20px;
    padding: 10px;
    border-radius: 10px;
`;
