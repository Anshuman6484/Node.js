// Streams are used to read data in chunks

const fs = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const stream = fs.createReadStream('./content/big.txt', {
  highWaterMark: 90000,
  encoding: 'utf8',
})

stream.on('data', (res) => {
  console.log(res)
})

stream.on('error', (err) => console.log(err))
