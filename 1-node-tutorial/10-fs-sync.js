// const fs = require('fs')    // Imported whole fs-module

// Synchronous method

// fs.readFileSync()
// fs.writeFileSync()

// const first = fs.readFileSync('./content/first.txt', 'utf8')     // read type is 'utf8'
// const second = fs.readFileSync('./content/second.txt', 'utf8')

// Another method
const { readFileSync, writeFileSync } = require('fs') // Only imported 2 functions

console.log('Start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`
// )

// If the file is not present there, node will create it else it will overwrite it

// To append value pass 'flag' parameter
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } // flag is an object
)

console.log('End of current task')
console.log('Starting the next one')
