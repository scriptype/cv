export default function toPlural(value, { plural, quantity }) {
  if (quantity === 1) {
    return `${quantity} ${value}`
  }
  return `${quantity} ${plural || `${value}s`}`
}
