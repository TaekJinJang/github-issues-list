import {useRecoilValue} from 'recoil';
import IssueDetailContainer from '../containers/IssueDetailContainer';
import {issueDetailSelector} from '../recoil/issueState';

const IssueDetail = () => {
    const issueListLoadable = useRecoilValue(issueDetailSelector);
    console.info(issueListLoadable(30));
    return (
        <>
            <IssueDetailContainer />
        </>
    );
};

export default IssueDetail;
