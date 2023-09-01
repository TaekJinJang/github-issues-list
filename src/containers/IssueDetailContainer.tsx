import * as S from '../styles/Issue.styled';

import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getIssueDetailAPI} from '../apis/IssueAPI';
import {issueDetailType} from '../types/IssueTypes';
import IssueItem from '../components/common/IssueItem';
import MarkdownBody from '../components/MarkdownBody';
import IssueDetailSkeleton from '../components/IssueDetailSkeleton';

const IssueDetailContainer = () => {
    const params = useParams();
    const id = params.id;

    const {data, loading} = useIssueDetail(Number(id));

    return (
        <>
            {loading ? (
                <IssueDetailSkeleton />
            ) : (
                <>
                    <S.IssueDetailHeader>
                        <img src={data.user.avatar_url} alt={data.user.login} width={80} />
                        <IssueItem
                            issue={{
                                number: data.number,
                                title: data.title,
                                user: {login: data.user.login},
                                created_at: data.created_at,
                                comments: data.comments,
                            }}
                        />
                    </S.IssueDetailHeader>
                    <S.IssueDetailBody>
                        <MarkdownBody body={data.body}></MarkdownBody>
                    </S.IssueDetailBody>
                </>
            )}
        </>
    );
};

export default IssueDetailContainer;

const useIssueDetail = (id: number) => {
    const [data, setData] = useState<issueDetailType>({
        number: 0,
        title: '',
        user: {
            login: '',
            avatar_url: '',
        },
        created_at: '',
        comments: 0,
        body: '',
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getIssueDetailAPI(id)
            .then((response: issueDetailType) => {
                setData(response);

                setError(null);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return {data, error, loading};
};
