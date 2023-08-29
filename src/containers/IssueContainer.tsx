import * as S from '../styles/Issue.styled';
import {useRecoilValue, useRecoilValueLoadable} from 'recoil';
import {issueListSelector} from '../recoil/issueState';

const IssueContainer = () => {
    const test = useRecoilValue(issueListSelector);
    const issueListLoadable = useRecoilValueLoadable(issueListSelector);
    console.info(issueListLoadable);
    console.info(test);
    return <S.IssueContainer>sss</S.IssueContainer>;
};

export default IssueContainer;
