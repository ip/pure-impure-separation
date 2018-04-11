const fs = require('fs')

const greetPure = require('./greet.pure')

module.exports = greetPure({
  readFile: fs.readFile,
  log: console.log
})
