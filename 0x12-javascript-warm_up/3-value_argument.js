#!/usr/bin/node
// This prints the first argument that is passed to it
const args = process.argv;
if (args[2] === undefined) {
  console.log('No argument');
} else {
  console.log(args[2]);
}
