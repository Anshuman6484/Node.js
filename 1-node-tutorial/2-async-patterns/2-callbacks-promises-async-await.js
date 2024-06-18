// const { readFile, writeFile } = require('fs')

// Ex of callback
// console.log('Starting first task')

// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(result)
//   console.log('Finished first task')
// })

// console.log('Starting second task')

// Ex of Promise
// console.log('Starting first task')

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, result) => {
//       if (err) reject(err)
//       else resolve(result)
//       //   console.log('Finished first task')
//     })
//   })
// }

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

// console.log('Starting second task')

// Ex of Async-await
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const { readFile, writeFile } = require('fs').promises

const start = async () => {
  try {
    const first = await readFile('./content/first.txt')
    const second = await readFile('./content/second.txt')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`
      // { flag: 'a' }      // To append in the file
    )
  } catch (error) {
    console.log(error)
  }
}

start()
