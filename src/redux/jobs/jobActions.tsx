import { apiGetJobs } from '../../services/jobs/job';
import { GET_JOBS, REQUEST_ERROR } from './jobReducer';

const _jobs = (current_page : number, data: [], last_page: number, total : number ) => ({
    type: GET_JOBS,
    payload: {
        current_page,
        data,
        last_page,
        total
    }
});

const _requestError = (error: any) => ({
    type: REQUEST_ERROR,
    payload: {
        error
    }
});

export const getJobsAction = () => (dispatch: any) => {
    apiGetJobs()
        .then(res => {
            const {current_page, data, last_page, total} = res.data;
            dispatch(_jobs(current_page, data, last_page, total));
        })
        .catch(error => dispatch(_requestError(error)));
};