
export const CENTER_MAP = 'map/CENTER_MAP';

const initialState  = {
  zoom: 2,
  center: {lat: 0, lng: 0}
};

const MapReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CENTER_MAP:
      return {
        ...state,
        zoom: action.payload.zoom,
        center: action.payload.center
      };
    default:
      return state;
  }
};

export default MapReducer;
