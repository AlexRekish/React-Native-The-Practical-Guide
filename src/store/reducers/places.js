import { ActionType } from '../actions';

const initialState = {
  places: [],
  selectedPlace: null,
  isSelected: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat(action.place)
      };
    case ActionType.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => place.id !== action.id),
        selectedPlace: null,
        isSelected: false
      };
    case ActionType.SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.id === action.id),
        isSelected: true
      };
    case ActionType.CLOSE_MODAL:
      return {
        ...state,
        selectedPlace: null,
        isSelected: false
      };
    default:
      return state;
  }
};

export default reducer;
