// Asynchronous method

const { readFile, writeFile } = require('fs')

// readFile(path,encoding type like 'utf8', callback fun)

// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(result)
// })

console.log('Start')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('Done with this task')
      }
    )
  })
})

console.log('Starting the next task')

// Alternatives for callbacks : Promises & Async-await
