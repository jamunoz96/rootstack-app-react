import JobStore from "../types/JobStore.type";

export const GET_JOBS = 'auth/GET_JOBS';
export const REQUEST_ERROR = 'auth/REQUEST_ERROR';

const initialState : JobStore  = {
  current_page: 0,
  data: [],
  last_page: 0,
  total: 0
};

const JobReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_JOBS:
      localStorage.setItem("current_page_jobs", JSON.stringify(action.payload.current_page));
      return {
        ...state,
        current_page: action.payload.current_page,
        data: action.payload.data,
        last_page: action.payload.last_page,
        total: action.payload.total
      };
    case REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload.error
      };
    default:
      return state;
  }
};

export default JobReducer;
