const sayHi = (name) => {
  console.log(`Hey! ${name}`)
}

// Exporting a fun
module.exports = sayHi // Since only one thing is being exported, no need to export in form of object
