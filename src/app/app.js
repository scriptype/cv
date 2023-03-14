import experienceTemplate from './templates/experience'
import experienceData from './data/experiences'

const experiencesHTML = experienceData.map(ex => experienceTemplate(ex)).join('')
const container = document.getElementById('experience')
container.insertAdjacentHTML('beforeEnd', experiencesHTML)
