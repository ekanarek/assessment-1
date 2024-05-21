// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  const arr = [];
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > 10) {
      arr.push(numbers[i]);
    }
  }
  return arr;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  const arr = [];
  for (const word of words) {
    if (word[0] === 'b' || word[0] === 'B') {
      arr.push(word);
    }
  }
  return arr;
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  originalArray = [...originalArray, ...additionalItems];
  return originalArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  const arr = [];
  for (const item of items) {
    if (item.length === length) {
      arr.push(item);
    }
  }
  return arr;
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  const arr = [];
  for (let i = 0; i <= items.length; i += 2) {
    arr.push(items[i]);
  }
  return arr;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(letter)) {
      arr.push(i);
    }
  }
  return arr;
}


// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  const smallestN = items.slice(0, n).reverse();
  return smallestN;
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i; 
    }
  }
  return undefined; 
}


// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  const arr = [];
  for (let i = start; i <= stop; i++) {
    arr.push(i);
  }
  return arr;
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
