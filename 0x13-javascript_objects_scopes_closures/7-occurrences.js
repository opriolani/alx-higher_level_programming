#!/usr/bin/node
// A function that returns the number of  occurences in a list
exports.nbOccurences = function (list, searchElement) {
  return list.reduce((count, current) => current === searchElement ? count + 1 : count, 0);
};
