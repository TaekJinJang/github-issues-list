import * as S from '../styles/Issue.styled';
import {issueType} from '../types/IssueTypes';
import {useNavigate} from 'react-router-dom';

const IssueItem = ({issue}: {issue: issueType}) => {
    const navigate = useNavigate();
    const onMoveDetail = () => {
        navigate(`/detail/${issue.number}`);
    };

    return (
        <S.IssueListStyled onClick={onMoveDetail}>
            <div>
                <span className='title'>
                    #{issue.number} {issue.title}
                </span>
                <span className='bottom'>
                    <span>작성자 : {issue.user.login}</span>
                    <span>작성일 : {new Date(issue.created_at).toLocaleDateString()}</span>
                </span>
            </div>
            <span className='comment'>코멘트 : {issue.comments}</span>
        </S.IssueListStyled>
    );
};

export default IssueItem;
