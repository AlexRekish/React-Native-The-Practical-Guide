import dbEndpoint, { getDbEndpointWithId } from './playloads';
import { deleteImage } from './imagesService';

export const uploadPlace = async place => {
  const settings = {
    method: 'POST',
    body: JSON.stringify(place)
  };
  const res = await fetch(dbEndpoint, settings);
  const id = await res.json();
  return id.name;
};

export const loadPlaces = async () => {
  const res = await fetch(dbEndpoint);
  const places = await res.json();
  const placesArr = [];
  /* eslint-disable*/
  for (const key in places) {
    placesArr.push({
      ...places[key],
      id: key
    });
  }
  /* eslint-enable */
  return placesArr;
};

export const deletePlace = async (id, imageName, ref) => {
  const settings = {
    method: 'DELETE'
  };
  await fetch(getDbEndpointWithId(id), settings);
  deleteImage(imageName, ref);
};
