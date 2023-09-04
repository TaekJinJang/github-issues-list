import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from '../styles/Issue.styled';
import IssueItemSkeleton from './IssueItemSkeleton';

const IssueDetailSkeleton = () => {
    return (
        <>
            <S.IssueDetailHeader>
                <Skeleton width={80} height={80} borderRadius={50} />
                <IssueItemSkeleton />
            </S.IssueDetailHeader>
            <S.IssueDetailBody>
                <Skeleton height={500} borderRadius={50} />
            </S.IssueDetailBody>
        </>
    );
};

export default IssueDetailSkeleton;
