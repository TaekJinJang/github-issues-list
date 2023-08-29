import {useState, useEffect, useRef} from 'react';
import * as S from '../styles/Issue.styled';
import {useRecoilValueLoadable} from 'recoil';
import {issueListSelector} from '../recoil/issueState';
import IssueItem from '../components/IssueItem';
import {issueType} from '../types/IssueTypes';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const IssueContainer = () => {
    const target = useRef<HTMLDivElement>(null);
    const [issues, setIssues] = useState<issueType[]>([]);

    const {count} = useInfiniteScroll({
        target: target,
        targetArray: issues,
        threshold: 0.2,
        endPoint: 3,
    });
    const issueListLoadable = useRecoilValueLoadable<issueType[]>(issueListSelector(count));

    useEffect(() => {
        if (issueListLoadable.state === 'hasValue') {
            setIssues(issues => [...issues, ...issueListLoadable.contents]);
        }
    }, [issueListLoadable.contents]);
    console.info(issues);

    switch (issueListLoadable.state) {
        case 'hasValue':
            return (
                <>
                    <S.IssueContainer ref={target}>
                        {issues.map((issue, index) => {
                            const item = <IssueItem key={issue.number} issue={issue} />;
                            if ((index + 1) % 5 === 0) {
                                const adItem = (
                                    <S.AdImage
                                        key={index}
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
            return (
                <>
                    <S.IssueContainer ref={target}>
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
        case 'hasError':
            return <div> error</div>;
    }
};

export default IssueContainer;
