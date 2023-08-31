import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from '../styles/Issue.styled';

const IssueItemSkeleton = () => {
    return (
        <S.IssueListStyled>
            <div>
                <Skeleton className='title' />

                <div className='bottom'>
                    <Skeleton></Skeleton>
                    <Skeleton></Skeleton>
                </div>
            </div>
            <Skeleton></Skeleton>
        </S.IssueListStyled>
    );
};

export default IssueItemSkeleton;
