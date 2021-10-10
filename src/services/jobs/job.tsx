import API from '../api';

export const apiGetJobs = () => {
    const token = localStorage.getItem('auth_token');
    return API.get(`/jobs?page=1`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const apiNextJobs = (nextPage : number) => {
    const token = localStorage.getItem('auth_token');
    return API.get(`/jobs?page=${nextPage+1}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const apiBackJobs = (backPage : number) => {
    const token = localStorage.getItem('auth_token');
    return API.get(`/jobs?page=${backPage-1}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const apiCurrentJobs = (nextPage : number) => {
    const token = localStorage.getItem('auth_token');
    return API.get(`/jobs?page=${nextPage}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}