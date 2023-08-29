import * as S from '../styles/Issue.styled';
import {issueType} from '../types/IssueTypes';

const IssueItem = ({issue}: {issue: issueType}) => {
    return (
        <li>
            <S.IssueListStyled>
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
