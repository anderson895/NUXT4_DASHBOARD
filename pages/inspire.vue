<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <BarChart />
      </v-col>
      <v-col cols="12" md="6">
        <LineChart />
      </v-col>
      <v-col cols="12" md="6">
        <PieChart />
      </v-col>
      <v-col cols="12" md="6">
        <DoughnutChart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import BarChart from '~/components/charts/BarChart.vue'
import LineChart from '~/components/charts/LineChart.vue'
import PieChart from '~/components/charts/PieChart.vue'
import DoughnutChart from '~/components/charts/DoughnutChart.vue'
</script>
