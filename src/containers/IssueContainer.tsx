import * as S from '../styles/Issue.styled';
import {useRecoilValueLoadable} from 'recoil';
import {issueListSelector} from '../recoil/issueState';
import IssueItem from '../components/IssueItem';
import {issueType} from '../types/IssueTypes';

const IssueContainer = () => {
    const issueListLoadable = useRecoilValueLoadable<issueType[]>(issueListSelector);
    console.info(issueListLoadable);

    switch (issueListLoadable.state) {
        case 'hasValue':
            return (
                <>
                    <S.IssueContainer>
                        {issueListLoadable.contents.map(issue => (
                            <IssueItem key={issue.number} issue={issue} />
                        ))}
                    </S.IssueContainer>
                </>
            );
        case 'loading':
            return <div>s</div>;
        case 'hasError':
            return <div> error</div>;
    }
};

export default IssueContainer;
