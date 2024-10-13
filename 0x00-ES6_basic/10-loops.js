export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = array[idx];
    let array[idx] = appendString + value;
  }

  return array;
}
