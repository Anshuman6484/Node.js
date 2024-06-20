// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events')

const customEmitter = new EventEmitter() // Create an instance from the class that we get back

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, age) => {
  console.log(`Data received : Username - ${name}, Age - ${age}`)
})

// customEmitter.emit('response') // Emitting event. Only 'data received' is shown in console

customEmitter.on('response', () => {
  console.log(`Some other logic here`)
})

customEmitter.emit('response', 'Amit', 25)

// Pass name of event to 'on' method. Here name is 'response'

// We can create as many instances of the event as we want

// Always emit the event at last. First listen then emit

// We can pass any parameters to the event just like functions
