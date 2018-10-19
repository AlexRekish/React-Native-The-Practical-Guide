import getPlaceActions, { PlacesAction } from './placesActions';
import getUiActions, { UiAction } from './ui';

export const ActionType = {
  ...PlacesAction,
  ...UiAction
};

const Action = {
  ...getPlaceActions(),
  ...getUiActions()
};

export default Action;
