const arrayUtils = require('array-utils');

// array-utils.js

module.exports = {
    sum: arr => arr.reduce((acc, val) => acc + val, 0),
    average: arr => arr.reduce((acc, val) => acc + val, 0) / arr.length,
    unique: arr => [...new Set(arr)],
    removeDuplicates: arr => arr.filter((value, index, self) => self.indexOf(value) === index),
    sortBy: (arr, comparator) => arr.slice().sort(comparator),
    filterByType: (arr, type) => arr.filter(item => typeof item === type),
    chunk: (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    ),
    flatten: arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []),
    shuffle: arr => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    },
    mapAsync: async (arr, asyncFn) => {
      const result = await Promise.all(arr.map(asyncFn));
      return result;
    }
  };
  
  