const uploadImage = async (image, ref) => {
  const name = `${Date.now()}${image.fileName}`;
  await ref.child(name).putString(image.data, 'base64', image.metadata);
  const url = await ref.child(name).getDownloadURL();
  return url;
};

export default uploadImage;
