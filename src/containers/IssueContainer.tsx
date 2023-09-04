import {useEffect, useRef} from 'react';
import * as S from '../styles/Issue.styled';
import {useRecoilValue} from 'recoil';
import {issuesStateAtom} from '../recoil/issueAtom';
import IssueItem from '../components/common/IssueItem';

import useInfiniteScroll from '../hooks/useInfiniteScroll';
import AdImage from '../components/Ad';
import IssueItemSkeleton from '../components/IssueItemSkeleton';
// import LoadingSpinner from '../components/common/LoadingSpinner';
// import NotFound from '../pages/NotFound';
import useIssues from '../hooks/useIssues';
import LoadingSpinner from '../components/common/LoadingSpinner';
import NotFound from '../pages/NotFound';

const IssueContainer = () => {
    const target = useRef<HTMLDivElement>(null);

    const issuesState = useRecoilValue(issuesStateAtom);
    const {issues, isLoading, errorStatus, hasMoreIssues} = issuesState;
    const {getIssues, getNextPage} = useIssues();

    const {count} = useInfiniteScroll({
        target: target,
        targetArray: issuesState.issues,
        threshold: 0.2,
        endPoint: 3,
    });

    useEffect(() => {
        if (issues.length === 0) getIssues(1);
        else if (count > 1) getNextPage();
        console.info('여기서실행돼');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    console.info(issues);

    // state가 error라면 error 페이지로 리다이렉트
    if (errorStatus) return <NotFound />;
    return (
        <div>
            {issues.length === 0 ? (
                Array.from({length: 10}).map((_, index) => <IssueItemSkeleton key={index} />)
            ) : (
                <S.IssueContainer>
                    <section ref={target}>
                        {issues.map((issue, index) => {
                            const item = <IssueItem key={issue.number} issue={issue} />;
                            if ((index + 1) % 4 === 0) return [item, <AdImage key={index} />];

                            return item;
                        })}
                        {isLoading && hasMoreIssues && <LoadingSpinner />}
                        {!hasMoreIssues && <div>더이상 issue가 없습니다.</div>}
                    </section>
                </S.IssueContainer>
            )}
        </div>
    );
};

export default IssueContainer;
