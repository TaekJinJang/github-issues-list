import * as S from '../styles/Issue.styled';

import {useParams} from 'react-router-dom';

import IssueItem from '../components/common/IssueItem';
import MarkdownBody from '../components/MarkdownBody';
import IssueDetailSkeleton from '../components/IssueDetailSkeleton';
import useIssueDetail from '../hooks/useIssueDetail';
import {useEffect} from 'react';
import NotFound from '../pages/NotFound';

const IssueDetailContainer = () => {
    const params = useParams();
    const id = params.id;

    const {issueDetail, getIssueDetail} = useIssueDetail();
    const {isLoading, errorStatus, issue} = issueDetail;

    useEffect(() => {
        getIssueDetail(Number(id));
    }, [getIssueDetail, id]);

    console.info(issueDetail);
    // state가 error라면 error 페이지로 리다이렉트
    if (errorStatus) return <NotFound />;

    return (
        <>
            {isLoading ? (
                <IssueDetailSkeleton />
            ) : (
                <>
                    <S.IssueDetailHeader>
                        <img src={issue.user.avatar_url} alt={issue.user.login} width={80} />
                        <IssueItem
                            issue={{
                                number: issue.number,
                                title: issue.title,
                                user: {login: issue.user.login},
                                created_at: issue.created_at,
                                comments: issue.comments,
                            }}
                        />
                    </S.IssueDetailHeader>
                    <S.IssueDetailBody>
                        <MarkdownBody body={issue.body}></MarkdownBody>
                    </S.IssueDetailBody>
                </>
            )}
        </>
    );
};

export default IssueDetailContainer;
