import * as S from '../styles/Issue.styled';
import {issueType} from '../types/IssueTypes';
import {useNavigate} from 'react-router-dom';

const IssueItem = ({issue}: {issue: issueType}) => {
    const navigate = useNavigate();
    const onMoveDetail = () => {
        navigate(`/detail/${issue.number}`);
    };
    return (
        <li>
            <S.IssueListStyled onClick={onMoveDetail}>
                <S.IssueContents>
                    <h2>{issue.number}</h2>
                    <span>{issue.user.login}</span>
                    <span>{issue.created_at}</span>
                </S.IssueContents>

                <S.IssueComment>{issue.comments}</S.IssueComment>
            </S.IssueListStyled>
        </li>
    );
};

export default IssueItem;
