import {styled} from 'styled-components';
import './App.css';
import Header from './components/common/Header';
import {Outlet} from 'react-router-dom';

function App() {
    return (
        <>
            <Header />
            <ContentsWrapperStyled>
                <Outlet />
            </ContentsWrapperStyled>
        </>
    );
}

export default App;
const ContentsWrapperStyled = styled.div`
    max-width: 768px;
    margin: 0 auto;
`;
