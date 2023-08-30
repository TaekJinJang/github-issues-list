import {atom, selector, selectorFamily} from 'recoil';
import * as API from '../apis/IssueAPI';
import {issueType} from '../types/IssueTypes';

// Atom 정의
export const issueListAtom = atom<issueType[]>({
    key: 'issueListAtom',
    default: [], // 기본값 설정 (이슈 목록은 빈 배열)
});

export const issuePageAtom = atom<number>({
    key: 'issuePageAtom',
    default: 1,
});

export const issueDetailAtom = atom({
    key: 'issueDetailAtom',
    default: null, // 기본값 설정 (개별 이슈 정보는 null)
});

// Selector 정의

export const issueListSelector = selector({
    key: 'issueListSelector',
    get: async ({get}) => {
        const page = get(issuePageAtom);
        try {
            const issuesData = await API.getIssueAPI(page);
            return issuesData.map((issue: issueType) => ({
                number: issue.number,
                title: issue.title,
                user: issue.user,
                created_at: issue.created_at,
                comments: issue.comments,
            }));
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    // set: ({set}, newIssueList) => {
    //     try {
    //         set(issueListAtom, newIssueList);
    //         console.info('dkxha');
    //     } catch (error) {
    //         console.error(error);
    //         throw error;
    //     }
    // },
});

export const issueDetailSelector = selectorFamily({
    key: 'issueDetailSelector',
    get: (id: number) => async () => {
        try {
            const issueData = await API.getIssueDetailAPI(id);
            return issueData;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
});
