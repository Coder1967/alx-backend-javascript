export default function cleanSet(set, startsWith) {
  let newString = '';
  const startLength = startsWith.length;

  if (startLength === 0) {
    return '';
  }
  for (const val of set) {
    if (startsWith === val.substr(0, startLength)) {
      newString += `${val.substr(startLength, val.length)}-`;
    }
  }
  return newString.substr(0, newString.length - 1);
}
