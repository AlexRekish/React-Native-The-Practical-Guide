import { call, put } from 'redux-saga/effects';

import Action from '../actions';
import uploadImage from '../../services/imagesService';
import { uploadPlace, loadPlaces, deletePlace } from '../../services/placesService';

export function* uploadPlaceSaga(action) {
  const { name, image, ref } = action;
  try {
    yield put(Action.onStartLoadData());
    const link = yield call(uploadImage, image, ref);
    const place = { image: { uri: link.url, name: link.name }, name };
    yield call(uploadPlace, place);
    yield put(Action.onEndLoadData());
    yield alert('Your place is added!');
  } catch (error) {
    yield put(Action.onEndLoadData());
    alert('Unexpected error!');
  }
}

export function* loadPlacesSaga() {
  try {
    yield put(Action.onStartLoadData());
    const places = yield call(loadPlaces);
    yield put(Action.onLoadPlacesSucceed(places));
    yield put(Action.onEndLoadData());
  } catch (error) {
    yield put(Action.onEndLoadData());
    alert('Unexpected error!');
  }
}

export function* deletePlaceSaga(action) {
  const { id, imageName, ref } = action;
  try {
    yield call(deletePlace, id, imageName, ref);
  } catch (error) {
    alert('Unexpected error!');
  }
}
