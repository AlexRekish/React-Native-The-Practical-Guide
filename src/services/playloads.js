const dbEndpoint = 'https://awesome-places-1539679578843.firebaseio.com/places.json';
export default dbEndpoint;

export const getDbEndpointWithId = id =>
  `https://awesome-places-1539679578843.firebaseio.com/places/${id}.json`;
