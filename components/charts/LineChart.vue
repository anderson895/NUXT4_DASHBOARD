<template>
  <div class="bg-gray-50 p-6 rounded-lg shadow-md">
    <h3 class="text-center text-xl font-semibold text-gray-800 mb-6">Line Chart</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div
        v-for="(value, index) in salesData"
        :key="index"
        class="bg-white p-4 rounded shadow-sm border border-gray-200"
      >
        <label class="block text-sm font-medium text-gray-700 mb-1">
          {{ labels[index] }}
        </label>
        <input
          type="number"
          v-model.number="salesData[index]"
          class="w-full p-2 border border-gray-300 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <LineChartJs :data="chartData" :options="options" />
    </div>
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
