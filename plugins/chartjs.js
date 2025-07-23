// ✅ Nuxt 2-compatible plugin
import { Chart, registerables } from 'chart.js'

export default ({ app }, inject) => {
  Chart.register(...registerables)

  // Optional: make Chart available in components via this.$chart
  inject('chart', Chart)
}
