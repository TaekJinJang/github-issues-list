import {Octokit} from 'octokit';

export const IssueAPI = async () => {
    const octokit = new Octokit({auth: process.env.REACT_APP_GIT_TOKEN});
    await octokit.request('GET /repos/{org}/{repo}/issues', {
        org: 'facebook',
        repo: 'react',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });
};

export const IssueDetailAPI = async (id: number) => {
    const octokit = new Octokit({auth: process.env.REACT_APP_GIT_TOKEN});
    await octokit.request('GET /repos/{org}/{repo}/issues/{issue_number}', {
        org: 'facebook',
        repo: 'react',
        issue_number: id,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
        },
    });
};
