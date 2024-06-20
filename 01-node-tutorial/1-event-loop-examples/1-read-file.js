const { readFile } = require('fs')

console.log('Started first task')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('Finished first task')
})

console.log('Starting next task')

// Code is executed line by line
// All callbacks are executed once the program is finished
