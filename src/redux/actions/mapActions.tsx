import { CENTER_MAP } from "../reducers/mapReducer"

const _CENTER_MAP = (zoom: number, center: {lat: number, lng: number}) => ({
    type: CENTER_MAP,
    payload: {
        zoom,
        center
    }
})

export const centerMap = (zoom : number, center : {lat: number, lng: number}) => (dispatch : any) => {
    dispatch(_CENTER_MAP(zoom, center));
}