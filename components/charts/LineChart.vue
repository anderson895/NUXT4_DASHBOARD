<template>
  <div>
    <h3 class="text-center mb-4">Line Chart</h3>

    <div class="grid grid-cols-4 gap-2 mb-4">
      <div v-for="(value, index) in salesData" :key="index">
        <label class="block text-sm font-medium text-gray-700">{{ labels[index] }}</label>
        <input type="number" v-model.number="salesData[index]" class="border p-1 w-full rounded" />
      </div>
    </div>

    <LineChartJs :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Line as LineChartJs } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const labels = ['January', 'February', 'March', 'April']
const salesData = ref([40, 60, 80, 100])

const chartData = computed(() => ({
  labels,
  datasets: [
    {
      label: 'Sales',
      data: salesData.value,
      fill: true,
      borderColor: '#42a5f5',
      backgroundColor: 'rgba(66,165,245,0.2)',
      tension: 0.3
    }
  ]
}))

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Monthly Sales'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
</script>
