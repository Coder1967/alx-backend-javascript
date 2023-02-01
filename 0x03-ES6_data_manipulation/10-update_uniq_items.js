export default function (updateUniqueItems) {
  const getType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);
  if (getType(updateUniqueItems) !== 'Map') {
    throw new Error('Cannot process');
  }
  updateUniqueItems.forEach((value, key) => {
    if (value === 1) {
      updateUniqueItems.set(key, 100);
    }
  });
}
