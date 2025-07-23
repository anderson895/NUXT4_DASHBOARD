<template>
  <div class="bg-gray-50 p-6 rounded-lg shadow-md">
    <h3 class="text-center text-xl font-semibold text-gray-800 mb-6">Pie Chart</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div
        v-for="(value, index) in shareData"
        :key="index"
        class="bg-white p-4 rounded shadow-sm border border-gray-200"
      >
        <label class="block text-sm font-medium text-gray-700 mb-1">
          {{ labels[index] }}
        </label>
        <input
          type="number"
          v-model.number="shareData[index]"
          class="w-full p-2 border border-gray-300 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <Pie :data="chartData" :options="options" />
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { Pie } from 'vue-chartjs'

const labels = ['Chrome', 'Firefox', 'Safari', 'Edge']
const shareData = ref([45, 25, 20, 10])

const chartData = computed(() => ({
  labels,
  datasets: [
    {
      label: 'Browser Share',
      backgroundColor: ['#f44336', '#3f51b5', '#ff9800', '#009688'],
      data: shareData.value
    }
  ]
}))

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'right' },
    title: { display: true, text: 'Browser Usage' }
  }
}
</script>
