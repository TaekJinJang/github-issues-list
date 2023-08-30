import {useState, useEffect, useRef} from 'react';
import * as S from '../styles/Issue.styled';
import {useRecoilValueLoadable} from 'recoil';
import {issueListSelector} from '../recoil/issueState';
import IssueItem from '../components/IssueItem';
import {issueType} from '../types/IssueTypes';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import {Link} from 'react-router-dom';

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
    }, [count, issueListLoadable.contents]);
    console.info(issues);
    console.info(count);

    switch (issueListLoadable.state) {
        case 'hasValue':
            return (
                <div ref={target}>
                    <S.IssueContainer>
                        {issues.map((issue, index) => {
                            const item = <IssueItem key={issue.number} issue={issue} />;
                            if ((index + 1) % 5 === 0) {
                                const adItem = (
                                    <Link
                                        to='https://www.wanted.co.kr/'
                                        target='_blank'
                                        key={index}
                                    >
                                        <S.AdImage
                                            src='/assets/img/ad_image.png'
                                            alt='ad-image'
                                        ></S.AdImage>
                                    </Link>
                                );
                                return [item, adItem];
                            }
                            return item;
                        })}
                    </S.IssueContainer>
                </div>
            );
        case 'loading':
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
        case 'hasError':
            return <div> error</div>;
    }
};

export default IssueContainer;
