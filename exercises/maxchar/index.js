// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const object = {};
  for (let char of str) {
    object[char] ? object[char] = object[char] + 1 : object[char] = 1;
  }
  let max = 0;
  let maxChar = '';
  for (let char in object) {
    if (object[char] > max) {
      max = object[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
