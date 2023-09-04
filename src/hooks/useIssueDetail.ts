import {useCallback, useState} from 'react';
import {issueDetailStateType, issueDetailType} from '../types/IssueTypes';
import * as api from '../apis/IssueAPI';
import {AxiosError} from 'axios';
import MESSAGE from '../constants/message';

const useIssueDetail = () => {
    const [issueDetail, setIssueDetail] = useState<issueDetailStateType>({
        isLoading: true,
        errorStatus: 0,
        issue: {} as issueDetailType,
    });
    const getIssueDetail = useCallback(async (id: number) => {
        try {
            const res = await api.getIssueDetailAPI(id);
            const issue = res.data;
            setIssueDetail(prev => ({...prev, issue}));
            if (res.data.state !== 'open') {
                const error = new AxiosError();
                setIssueDetail(prev => ({
                    ...prev,
                    errorStatus: error.response?.status ?? 'open 상태가 아닙니다.',
                }));
            }
        } catch (e) {
            const error = e as AxiosError;
            setIssueDetail(prev => ({
                ...prev,
                errorStatus: error.response?.status ?? MESSAGE.INVALID_ERROR,
            }));
        } finally {
            setIssueDetail(prev => ({...prev, isLoading: false}));
        }
    }, []);
    return {issueDetail, getIssueDetail};
};

export default useIssueDetail;
