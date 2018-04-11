const greet = require('./greet')

greet('./username.txt', err => {
  if (err) console.error(err)
})
