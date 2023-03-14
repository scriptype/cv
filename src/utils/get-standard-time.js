const months = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12
}

module.exports = function getStandardTime(nonStandardTimeString) {
  const [ month, year ] = nonStandardTimeString.split(' ')
  return new Date(year, months[month], 1)
}
