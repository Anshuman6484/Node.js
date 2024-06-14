// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const amit = 'Amit'
// const sumit = 'Sumit'

// const sayHi = (name) => {
//   console.log(`Hey! ${name}`)
// }

const names = require('./4-modules-I(names)') // Use require to acess the exported module
const sayHi = require('./5-modules-II(utils)')
const data = require('./6-alt-method')

require('./7-mind-grenade') // It works since we envoked the addValues function in the mind-grenade file

// console.log(names)

// sayHi('Anshuman')
// sayHi(names.amit)
// sayHi(names.sumit)

// console.log(data)
