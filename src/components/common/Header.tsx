import {API_PARAMETER} from '../../constants/apiParameter';
import ROUTES from '../../constants/routes';
import * as S from '../../styles/Header.styled';

const Header = () => {
    return (
        <S.Header>
            <S.HeaderLink to={ROUTES.HOME}>
                {`${API_PARAMETER.org} / ${API_PARAMETER.repo}`}
            </S.HeaderLink>
        </S.Header>
    );
};

export default Header;
