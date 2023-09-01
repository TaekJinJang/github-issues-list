import * as S from '../../styles/Issue.styled';
import {issueType} from '../../types/IssueTypes';
import {useNavigate, useParams} from 'react-router-dom';
import {changeDateFormat} from '../../utils/changeDateFormat';

const IssueItem = ({issue}: {issue: issueType}) => {
    const navigate = useNavigate();
    const onMoveDetail = () => {
        navigate(`/issues/${issue.number}`);
    };
    const params = useParams();
    const issueNumber = params.id;

    return (
        <S.IssueListStyled onClick={onMoveDetail} className={issueNumber ? '' : 'hover'}>
            <div className='left'>
                <div className='top'>
                    <span className='issueNumber'>#{issue.number}</span>{' '}
                    <span className='title'>{issue.title}</span>
                </div>
                <div className='bottom'>
                    <span>작성자 : {issue.user.login}</span>
                    <span>작성일 : {changeDateFormat(issue.created_at)}</span>
                </div>
            </div>
            <div className='right'>
                코멘트 : <span>{issue.comments}</span>
            </div>
        </S.IssueListStyled>
    );
};

export default IssueItem;
