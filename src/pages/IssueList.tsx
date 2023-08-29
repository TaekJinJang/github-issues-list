import {Octokit} from 'octokit';

const IssueList = () => {
    const octokit = new Octokit({auth: `personal-access-token123`});
    return <div>홈</div>;
};

export default IssueList;
