// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    const set1 = new Set(array1);
    const commonSet = new Set();

    for (const str of array2) {
        if (set1.has(str)) {
            commonSet.add(str);
        }
    }

    return Array.from(commonSet);
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % a === 0 || i % b === 0 || i % c === 0) {
            result.push(i);
        }
    }
    return result;
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(s) {
    if (s.length === 0) return '';
  
    let result = '';
    let count = 1;
    let currentChar = s[0];
  
    for (let i = 1; i < s.length; i++) {
      if (s[i] === currentChar) {
        count++;
      } else {
        result += (count > 1 ? count : '') + currentChar;
        currentChar = s[i];
        count = 1;
      }
    }
  
    // Append the last set of characters
    result += (count > 1 ? count : '') + currentChar;
  
    return result;

}

export { commonStrings, compressString, divisibleByEither };
