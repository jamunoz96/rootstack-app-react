import { store } from "../store";

const { dispatch } = store;
export const globalDispatch = (action: any) => dispatch(action);