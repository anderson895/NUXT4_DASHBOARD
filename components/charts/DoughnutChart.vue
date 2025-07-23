<template>
  <div>
    <h3 class="text-center mb-4">Doughnut Chart</h3>
    <div class="grid grid-cols-3 gap-4 mb-4">
      <div v-for="(value, index) in fruitData" :key="index">
        <label>{{ labels[index] }}</label>
        <input type="number" v-model.number="fruitData[index]" class="border rounded p-1 w-full" />
      </div>
    </div>
    <Doughnut :data="chartData" :options="options" />
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
