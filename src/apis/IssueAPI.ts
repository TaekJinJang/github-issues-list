import {Octokit} from 'octokit';
import API_PARAMETER from '../constants/apiParameter';

export const getIssueAPI = async (page: number) => {
    const octokit = new Octokit({auth: process.env.REACT_APP_GIT_TOKEN});
    const response = await octokit.request(
        'GET /repos/{org}/{repo}/issues?page={page}&state=open&sort=comments',
        {
            org: API_PARAMETER.org,
            repo: API_PARAMETER.repo,
            page: page,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
            },
        }
    );
    return response.data;
};

export const getIssueDetailAPI = async (id: number) => {
    const octokit = new Octokit({auth: process.env.REACT_APP_GIT_TOKEN});
    const response = await octokit.request('GET /repos/{org}/{repo}/issues/{issue_number}', {
        org: API_PARAMETER.org,
        repo: API_PARAMETER.repo,
        issue_number: id,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });
    return response.data;
};
