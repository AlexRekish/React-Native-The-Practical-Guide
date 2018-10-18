import { takeEvery, all } from 'redux-saga/effects';

import { ActionType } from '../actions';
import uploadPlaceSaga from './placesSagas';

export default function* watchImage() {
  yield all([takeEvery(ActionType.ADD_PLACE_INIT, uploadPlaceSaga)]);
}
