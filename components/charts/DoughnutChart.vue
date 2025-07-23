<template>
  <div class="bg-gray-50 p-6 rounded-lg shadow-md">
    <h3 class="text-center text-xl font-semibold text-gray-800 mb-6">Doughnut Chart</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      <div
        v-for="(value, index) in fruitData"
        :key="index"
        class="bg-white p-4 rounded shadow-sm border border-gray-200"
      >
        <label class="block text-sm font-medium text-gray-700 mb-1">
          {{ labels[index] }}
        </label>
        <input
          type="number"
          v-model.number="fruitData[index]"
          class="w-full p-2 border border-gray-300 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div class="bg-white p-4 rounded shadow">
      <Doughnut :data="chartData" :options="options" />
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import { Doughnut } from 'vue-chartjs'

const labels = ['Apples', 'Bananas', 'Oranges']
const fruitData = ref([30, 40, 30])

const chartData = computed(() => ({
  labels,
  datasets: [
    {
      label: 'Fruits',
      backgroundColor: ['#e91e63', '#ffc107', '#4caf50'],
      data: fruitData.value
    }
  ]
}))

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Fruit Distribution' }
  }
}
</script>
