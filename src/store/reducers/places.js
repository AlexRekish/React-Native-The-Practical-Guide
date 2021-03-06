import { ActionType } from '../actions';

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PLACES_SUCCEED:
      return {
        ...state,
        places: action.places
      };
    case ActionType.LOAD_PLACES_FAILED:
      return {
        ...state,
        places: []
      };
    default:
      return state;
  }
};

export default reducer;
