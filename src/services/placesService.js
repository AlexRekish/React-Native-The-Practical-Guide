import dbEndpoint from './playloads';

const uploadPlace = async place => {
  const settings = {
    method: 'POST',
    body: JSON.stringify(place)
  };
  const res = await fetch(dbEndpoint, settings);
  const id = await res.json();
  return id.name;
};

export default uploadPlace;
