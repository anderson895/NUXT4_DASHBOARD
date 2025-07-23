<template>
  <div>
    <h3 class="text-center mb-4">Bar Chart</h3>

    <div class="grid grid-cols-4 gap-2 mb-4">
      <div v-for="(value, index) in salesData" :key="index">
        <label class="block text-sm font-medium text-gray-700">{{ labels[index] }}</label>
        <input type="number" v-model.number="salesData[index]" class="border p-1 w-full rounded" />
      </div>
    </div>

    <Bar :data="chartData" :options="options" />
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
