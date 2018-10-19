export const PlacesAction = {
  ADD_PLACE_INIT: 'ADD_PLACE_INIT',
  DELETE_PLACE_INIT: 'DELETE_PLACE_INIT',
  START_LOAD_PLACES: 'START_LOAD_PLACES',
  LOAD_PLACES_SUCCEED: 'LOAD_PLACES_SUCCEED',
  LOAD_PLACES_FAILED: 'LOAD_PLACES_FAILED'
};

const getPlaceActions = () => ({
  onAddPlaceInit: (name, image, ref) => ({ type: PlacesAction.ADD_PLACE_INIT, name, image, ref }),
  onDeletePlaceInit: (id, imageName, ref) => ({
    type: PlacesAction.DELETE_PLACE_INIT,
    id,
    imageName,
    ref
  }),
  onStartLoadPlaces: () => ({ type: PlacesAction.START_LOAD_PLACES }),
  onLoadPlacesSucceed: places => ({ type: PlacesAction.LOAD_PLACES_SUCCEED, places }),
  onLoadPlacesFailed: () => ({ type: PlacesAction.LOAD_PLACES_FAILED })
});

export default getPlaceActions;
