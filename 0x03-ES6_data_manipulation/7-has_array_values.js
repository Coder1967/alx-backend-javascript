export default function hasValuesFromArray(set, array) {
  for (const arr of array) {
    if (set.has(arr) === false) {
      return false;
    }
  }
  return true;
}
