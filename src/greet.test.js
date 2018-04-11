process.env.NODE_ENV = 'test'

const tape = require('tape')
const sinon = require('sinon')

const greetPure = require('./greet.pure')

tape('greet() should fail if the file can\'t be read', t => {
  const expectedErr = 'some error'
  const readFile = readFileFailing(expectedErr)
  const seams = { readFile }

  greetPure(seams)(null, err => {
    t.strictEqual(err, expectedErr)
    t.end()
  })
})

tape('greet() should log the right string', t => {
  const readFile = readFileSuccessful('Joe')
  const log = sinon.spy()
  const seams = { readFile, log }

  greetPure(seams)(null, err => {
    t.error(err)
    t.assert(log.calledOnceWith('Hello, Joe!'))
    t.end()
  })
})

// Fake dependencies

// `readFile` which fails with a given error
const readFileFailing = error => (...args) => {
  const cb = args[args.length - 1]
  cb(error)
}

const readFileSuccessful = contents => (...args) => {
  const cb = args[args.length - 1]

  cb(null, 'Joe')
}
