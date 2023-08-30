export interface issueType {
    number: number;
    title: string;
    user: {
        login: string;
    };
    created_at: string;
    comments: number;
}
export interface issueDetailType extends issueType {
    user: {
        login: string;
        avatar_url: string;
    };
    body: string;
}
