import { takeEvery, all } from 'redux-saga/effects';

import { ActionType } from '../actions';
import { uploadPlaceSaga, loadPlacesSaga, deletePlaceSaga } from './placesSagas';

export default function* watchImage() {
  yield all([
    takeEvery(ActionType.ADD_PLACE_INIT, uploadPlaceSaga),
    takeEvery(ActionType.START_LOAD_PLACES, loadPlacesSaga),
    takeEvery(ActionType.DELETE_PLACE_INIT, deletePlaceSaga)
  ]);
}
