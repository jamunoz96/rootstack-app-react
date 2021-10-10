import { apiBackJobs, apiCurrentJobs, apiGetJobs, apiNextJobs } from '../../services/jobs/job';
import JobStore from '../types/JobStore';
import { GET_JOBS, REQUEST_ERROR } from '../reducers/jobReducer';

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

export const nextJobsAction = () => (dispatch: any, getState : any) => {
    const job : JobStore = getState().job;
    apiNextJobs(job.current_page)
        .then(res => {
            const {current_page, data, last_page, total} = res.data;
            dispatch(_jobs(current_page, data, last_page, total));
        })
        .catch(error => dispatch(_requestError(error)));
};

export const backJobsAction = () => (dispatch: any, getState : any) => {
    const job : JobStore = getState().job;
    apiBackJobs(job.current_page)
        .then(res => {
            const {current_page, data, last_page, total} = res.data;
            dispatch(_jobs(current_page, data, last_page, total));
        })
        .catch(error => dispatch(_requestError(error)));
};

export const currentJobsAction = () => (dispatch: any, getState : any) => {
    const job : JobStore = getState().job;
    apiCurrentJobs(job.current_page)
        .then(res => {
            const {current_page, data, last_page, total} = res.data;
            dispatch(_jobs(current_page, data, last_page, total));
        })
        .catch(error => dispatch(_requestError(error)));
};