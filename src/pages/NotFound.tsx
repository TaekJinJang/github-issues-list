import ROUTES from '../constants/routes';
import {useNavigate} from 'react-router-dom';
import {styled} from 'styled-components';

const NotFound = ({errorStatus}: {errorStatus?: number | string}) => {
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate(ROUTES.ISSUES);
    };

    return (
        <NotFoundContainerStyled>
            {errorStatus && <p className='error-status'>{errorStatus}</p>}
            <p className='message'>페이지를 찾을 수 없습니다 :(</p>
            <button onClick={navigateToMain}>메인으로 돌아가기</button>
        </NotFoundContainerStyled>
    );
};

export default NotFound;

const NotFoundContainerStyled = styled.div`
    margin-top: 50px;
    text-align: center;
    .error-status {
        margin: 0;
        font-size: 70px;
        font-weight: 900;
        color: var(--highLighting);
    }
    .message {
        padding-top: 0px;
        margin: 20px 0;
        font-size: 26px;
        font-weight: 800;
        color: var(--textSubtitle);
    }

    button {
        padding: 16px;
        font-size: 18px;
        font-weight: 600;
        color: white;
        background-color: var(--highLighting);
        border: none;
        border-radius: 12px;
        cursor: pointer;
    }
`;
