module.exports = seams => (fileName, cb) => {
  const { readFile, log } = seams

  readFile(fileName, 'utf8', (err, userName) => {
    if (err) return cb(err)

    log(`Hello, ${userName}!`)

    cb(null)
  })
}
