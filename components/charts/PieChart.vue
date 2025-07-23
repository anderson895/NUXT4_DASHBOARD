<template>
  <div>
    <h3 class="text-center mb-4">Pie Chart</h3>

    <div class="grid grid-cols-4 gap-2 mb-4">
      <div v-for="(value, index) in shareData" :key="index">
        <label class="block text-sm font-medium text-gray-700">{{ labels[index] }}</label>
        <input type="number" v-model.number="shareData[index]" class="border p-1 w-full rounded" />
      </div>
    </div>

    <Pie :data="chartData" :options="options" />
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
