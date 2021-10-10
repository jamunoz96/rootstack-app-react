import API from '../api';
const page = localStorage.getItem("current_page_jobs") || 0;
const nextPage = (+page)+1;

export const apiGetJobs = () => {
    const token = localStorage.getItem('auth_token')
    return API.get(`/jobs?page=${nextPage}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}