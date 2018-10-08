export const PlacesAction = {
  ADD_PLACE: 'ADD_PLACE',
  DELETE_PLACE: 'DELETE_PLACE',
  SELECT_PLACE: 'SELECT_PLACE',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

const getPlaceActions = () => ({
  onAddPlace: place => ({ type: PlacesAction.ADD_PLACE, place }),
  onDeletePlace: id => ({ type: PlacesAction.DELETE_PLACE, id }),
  onSelectPlace: id => ({ type: PlacesAction.SELECT_PLACE, id }),
  onCloseModal: () => ({ type: PlacesAction.CLOSE_MODAL })
});

export default getPlaceActions;
