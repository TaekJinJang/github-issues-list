import {useState, useEffect} from 'react';
import * as S from '../styles/Issue.styled';
import {useRecoilValueLoadable} from 'recoil';
import {issueListSelector} from '../recoil/issueState';
import IssueItem from '../components/IssueItem';
import {issueType} from '../types/IssueTypes';

const IssueContainer = () => {
    const issueListLoadable = useRecoilValueLoadable<issueType[]>(issueListSelector);
    const [issues, setIssues] = useState<issueType[]>([]);

    useEffect(() => {
        if (issueListLoadable.state === 'hasValue') {
            setIssues(issues => [...issues, ...issueListLoadable.contents]);
        }
    }, [issueListLoadable.contents]);

    switch (issueListLoadable.state) {
        case 'hasValue':
            return (
                <>
                    <S.IssueContainer>
                        {issues.map((issue, index) => {
                            const item = <IssueItem key={issue.number} issue={issue} />;
                            if ((index + 1) % 5 === 0) {
                                const adItem = (
                                    <S.AdImage
                                        src='/assets/img/ad_image.png'
                                        alt='ad-image'
                                    ></S.AdImage>
                                );
                                return [item, adItem];
                            }
                            return item;
                        })}
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
