#!/usr/bin/node
// This prints a string that is specified only if the first argument could be converted to an integer
const args = process.argv;
const number = parseInt(args[2], 10);
if (isNaN(number)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${number}`);
}
