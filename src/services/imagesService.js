const uploadImage = async (image, ref) => {
  const name = `${Date.now()}${image.fileName}`;
  await ref.child(name).putString(image.data, 'base64', image.metadata);
  const url = await ref.child(name).getDownloadURL();
  return { url, name };
};

export const deleteImage = async (imageName, ref) => {
  try {
    await ref.child(imageName).delete();
    alert('Successfully deleted');
  } catch (error) {
    alert('Unexpected error');
  }
};
export default uploadImage;
