import {atom} from 'recoil';
import {issuesStateType} from '../types/IssueTypes';

// Atom 정의
export const issuesStateAtom = atom<issuesStateType>({
    key: 'issueListAtom',
    default: {
        hasMoreIssues: true,
        isLoading: true,
        errorStatus: 0,
        pageCount: 1,
        issues: [],
    }, // 기본값 설정 (이슈 목록은 빈 배열)
});
