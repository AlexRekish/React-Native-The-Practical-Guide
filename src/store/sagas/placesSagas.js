import { call, put } from 'redux-saga/effects';

import Action from '../actions';
import uploadImage from '../../services/imagesService';
import uploadPlace from '../../services/placesService';

export default function* uploadPlaceSaga(action) {
  const { name, image, ref } = action;
  try {
    const link = yield call(uploadImage, image, ref);
    const place = { image: { uri: link }, name };
    const id = yield call(uploadPlace, place);
    yield put(Action.onAddPlaceSucceed({ ...place, id }));
    yield alert('Your place is added!');
  } catch (error) {
    alert('Unexpected error!');
  }
}
