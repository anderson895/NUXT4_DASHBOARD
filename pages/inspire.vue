<template>
  <v-container>
    <!-- Filter Buttons -->
    <v-row class="mb-4">
      <v-btn-toggle v-model="selectedChart" mandatory class="mx-auto">
        <v-btn value="all">All</v-btn>
        <v-btn value="bar">Bar</v-btn>
        <v-btn value="line">Line</v-btn>
        <v-btn value="pie">Pie</v-btn>
        <v-btn value="doughnut">Doughnut</v-btn>
      </v-btn-toggle>
    </v-row>

    <!-- Conditional Chart Display -->
    <v-row>
      <v-col cols="12" md="6" v-if="selectedChart === 'all' || selectedChart === 'bar'">
        <BarChart />
      </v-col>

      <v-col cols="12" md="6" v-if="selectedChart === 'all' || selectedChart === 'line'">
        <LineChart />
      </v-col>

      <v-col cols="12" md="6" v-if="selectedChart === 'all' || selectedChart === 'pie'">
        <PieChart />
      </v-col>

      <v-col cols="12" md="6" v-if="selectedChart === 'all' || selectedChart === 'doughnut'">
        <DoughnutChart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import BarChart from '~/components/charts/BarChart.vue'
import LineChart from '~/components/charts/LineChart.vue'
import PieChart from '~/components/charts/PieChart.vue'
import DoughnutChart from '~/components/charts/DoughnutChart.vue'

// Reactive state for selected chart type
const selectedChart = ref('all')
</script>
