#!/usr/bin/node
// This prints the first argument that is passed to it

if (process.argv[2]) {
  console.log(process.argv[2]);
} else {
  console.log('No argument');
}
