import getStandardTime from '../utils/get-standard-time.js'
import getDuration from '../utils/get-duration.js'

export default function experienceTemplate(data) {
  const {
    title,
    startDate,
    endDate,
    roles,
    technologiesUsed,
    breakBefore
  } = data

  const duration = endDate && getDuration(
    getStandardTime(startDate), 
    getStandardTime(endDate)
  ).toHuman()

  return `
    ${ breakBefore ? '<hr class="page-break-before" />' : '' }
    <li>
      <header class="experience-header">
        <h3 class="experience-title">${title}</h3>
        ${ endDate ? `
          <span class="small">${startDate} - ${endDate} (${duration})</span>
        ` : `
          <span class="small">${startDate} - Current</span>
        ` }
      </header>

      <ul class="plain experience-roles-and-technologies">
        ${ roles.reduce((result, role) => {
          return `${result}<li class="experience-role">${role}</li>`
        }, ``) }

        ${ (technologiesUsed && technologiesUsed.length) ? `
          <li class="experience-technologies">
            <strong>Technologies used:</strong>
            ${ technologiesUsed.join(', ') }
          </li>
        ` : '' }
      </ul>
    </li>
  `
}
