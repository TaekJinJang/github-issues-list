import ROUTES from '../constants/routes';
import * as S from '../styles/Header.styled';

const Header = () => {
    return (
        <S.Header>
            <S.HeaderLink to={ROUTES.HOME}>facebook / react</S.HeaderLink>
        </S.Header>
    );
};

export default Header;
