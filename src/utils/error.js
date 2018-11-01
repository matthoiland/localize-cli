module.exports = (message, exit) => {
  console.error(`Error: ${message}`)
  exit && process.exit(1)
}