import {useRecoilState} from 'recoil';
import {issuesStateAtom} from '../recoil/issueAtom';
import * as api from '../apis/IssueAPI';
import {PER_PAGE} from '../constants/apiParameter';
import {AxiosError} from 'axios';
import MESSAGE from '../constants/message';
import {useCallback} from 'react';

const useIssues = () => {
    const [issuesState, setIssuesState] = useRecoilState(issuesStateAtom);

    const getIssues = useCallback(
        async (page: number) => {
            try {
                setIssuesState(prev => ({
                    ...prev,
                    isLoading: true,
                }));
                const res = await api.getIssueAPI(page);
                const newIssues = res.data;

                if (!newIssues.length || newIssues.length < PER_PAGE) {
                    return setIssuesState(prev => ({
                        ...prev,
                        hasMoreIssues: false,
                        issues: [...prev.issues, ...newIssues],
                    }));
                }
                setIssuesState(prev => ({
                    ...prev,
                    issues: [...prev.issues, ...newIssues],
                }));
            } catch (e) {
                const error = e as AxiosError;
                setIssuesState(prev => ({
                    ...prev,
                    errorStatus: error.response?.status ?? MESSAGE.INVALID_ERROR,
                }));
            } finally {
                setIssuesState(prev => ({...prev, isLoading: false}));
            }
        },
        [setIssuesState]
    );
    const getNextPage = useCallback(() => {
        const newPageCount = issuesState.pageCount + 1;
        setIssuesState(prev => ({
            ...prev,
            isLoading: true,
            pageCount: prev.pageCount + 1,
        }));
        getIssues(newPageCount);
    }, [getIssues, issuesState.pageCount, setIssuesState]);
    return {getIssues, getNextPage};
};

export default useIssues;
