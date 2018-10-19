import { ActionType } from '../actions';

const initialState = {
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.START_LOAD_DATA:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.END_LOAD_DATA:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
