import {Octokit} from 'octokit';
import API_PARAMETER from '../constants/apiParameter';

export const getIssueAPI = async () => {
    const octokit = new Octokit({auth: process.env.REACT_APP_GIT_TOKEN});
    await octokit.request('GET /repos/{org}/{repo}/issues?per_page=10&state=open&sort=comments', {
        org: API_PARAMETER.org,
        repo: API_PARAMETER.repo,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });
};

export const getIssueDetailAPI = async (id: number) => {
    const octokit = new Octokit({auth: process.env.REACT_APP_GIT_TOKEN});
    await octokit.request('GET /repos/{org}/{repo}/issues/{issue_number}', {
        org: API_PARAMETER.org,
        repo: API_PARAMETER.repo,
        issue_number: id,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });
};
