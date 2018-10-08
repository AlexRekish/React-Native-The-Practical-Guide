import getPlaceActions, { PlacesAction } from './placesActions';

export const ActionType = {
  ...PlacesAction
};

const Action = {
  ...getPlaceActions()
};

export default Action;
