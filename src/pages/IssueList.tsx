import * as API from '../apis/IssueAPI';
import IssueItem from '../components/IssueItem';

const IssueList = () => {
    console.info(API.getIssueAPI());
    console.info(API.getIssueDetailAPI(27271));
    return (
        <div>
            <IssueItem />
        </div>
    );
};

export default IssueList;
