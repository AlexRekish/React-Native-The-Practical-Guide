import { ActionType } from '../actions';

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_PLACE_SUCCEED:
      return {
        ...state,
        places: state.places.concat(action.place)
      };
    case ActionType.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.id !== action.id)
      };
    case ActionType.LOAD_PLACES_SUCCEED:
      return {
        ...state,
        places: action.places
      };
    default:
      return state;
  }
};

export default reducer;
