export const PlacesAction = {
  ADD_PLACE: 'ADD_PLACE',
  DELETE_PLACE: 'DELETE_PLACE'
};

const getPlaceActions = () => ({
  onAddPlace: place => ({ type: PlacesAction.ADD_PLACE, place }),
  onDeletePlace: id => ({ type: PlacesAction.DELETE_PLACE, id })
});

export default getPlaceActions;
