export const PlacesAction = {
  ADD_PLACE_INIT: 'ADD_PLACE_INIT',
  ADD_PLACE_SUCCEED: 'ADD_PLACE_SUCCEED',
  DELETE_PLACE: 'DELETE_PLACE',
  START_LOAD_PLACES: 'START_LOAD_PLACES',
  LOAD_PLACES_SUCCEED: 'LOAD_PLACES_SUCCEED',
  LOAD_PLACES_FAILED: 'LOAD_PLACES_FAILED'
};

const getPlaceActions = () => ({
  onAddPlaceInit: (name, image, ref) => ({ type: PlacesAction.ADD_PLACE_INIT, name, image, ref }),
  onAddPlaceSucceed: place => ({ type: PlacesAction.ADD_PLACE_SUCCESS, place }),
  onDeletePlace: id => ({ type: PlacesAction.DELETE_PLACE, id }),
  onLoadPlacesSucceed: places => ({ type: PlacesAction.LOAD_PLACES_SUCCEED, places }),
  onLoadPlacesFailed: () => ({ type: PlacesAction.LOAD_PLACES_FAILED })
});

export default getPlaceActions;
