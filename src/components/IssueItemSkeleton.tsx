import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from '../styles/Issue.styled';

const IssueItemSkeleton = () => {
    return (
        <S.IssueListStyled>
            <div>
                <Skeleton className='title' />
                <Skeleton className='bottom' />
            </div>
            <div className='comment'>
                <Skeleton width={70} />
            </div>
            {/* <Skeleton /> */}
        </S.IssueListStyled>
    );
};

export default IssueItemSkeleton;
