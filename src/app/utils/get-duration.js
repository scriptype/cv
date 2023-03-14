import moment from 'moment'
import toPlural from './to-plural'

export default function getDuration(date1, date2) {
  const x = new moment(date1)
  const y = new moment(date2).endOf('month')
  const duration = moment.duration(y.diff(x))
  return {
    years: duration.years(),
    months: duration.months(),
    toHuman() {
      const segments = []
      if (this.years) {
        segments.push(toPlural('year', {
          quantity: this.years
        }))
      }
      if (this.months) {
        segments.push(toPlural('month', {
          quantity: this.months
        }))
      }
      return segments.join(', ')
    }
  }
}
