<template>
  <div class="bg-gray-50 p-6 rounded-lg shadow-md">
    <h3 class="text-center text-xl font-semibold text-gray-800 mb-6">Bar Chart</h3>

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
      <Bar :data="chartData" :options="options" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Bar } from 'vue-chartjs'

const labels = ['Jan', 'Feb', 'Mar', 'Apr']
const salesData = ref([40, 55, 75, 90])

const chartData = computed(() => ({
  labels,
  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#2196F3',
      data: salesData.value
    }
  ]
}))

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Monthly Sales Data' }
  }
}
</script>
