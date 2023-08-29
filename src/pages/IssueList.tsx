import * as API from '../apis/IssueAPI';

const IssueList = () => {
    console.info(API.IssueAPI());
    console.info(API.IssueDetailAPI(27271));
    return <div>홈</div>;
};

export default IssueList;
