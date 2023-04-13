#!/usr/bin/node
// A FUNCTION THAT RETURNS THE REVERSED VERSION OF A LIST
exports.esrever = function (list) {
  const output = [];

  while (list.length) {
    output.push(list.pop());
  }

  return output;
};
