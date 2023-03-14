const { readFile, writeFile} = require('fs/promises')
const Handlebars = require('handlebars')

const Paths = {
  data: './src/data.json',
  input: './src/index.hbs',
  output: './docs/index.html',
}

const Utils = {
  getDuration: require('./utils/get-duration'),
  getStandardTime: require('./utils/get-standard-time')
}

Handlebars.registerHelper('workingTime', function() {
  const duration = this.endDate && Utils.getDuration(
    Utils.getStandardTime(this.startDate), 
    Utils.getStandardTime(this.endDate)
  ).toHuman()
  if (this.endDate) {
    return `${this.startDate} - ${this.endDate} (${duration})`
  }
  return `${this.startDate} - Current`
})

Handlebars.registerHelper('commaSeparatedList', function(array) {
  return array.join(', ')
})

Promise.all([
  readFile(Paths.data, { encoding: 'utf-8' }),
  readFile(Paths.input, { encoding: 'utf-8' })
]).then(([data, content]) => {
  const template = Handlebars.compile(content)
  const output = template(JSON.parse(data))
  writeFile(Paths.output, output)
})
