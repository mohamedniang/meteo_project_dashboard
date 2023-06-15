<script setup lang="ts">
import { TwFeather, TwButton } from "vue3-tailwind";
// import { useData } from 'composables/weatherData';

import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement)

const latest = await useData('get_last')
const prev_temp = await useData('get_projection_temp')
const moy_hour = await useData('get_moy_hour')
const moy_day = await useData('get_moy_day')

const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: true,
  // offset: 8,
  // radius: 160,
  // spacing: 4,
  // hoverOffset: 32,
  // hoverBorderWidth: 1,
  // weight: 0
})

const temperatureLineChartData = reactive({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'temperature',
      backgroundColor: '#ffffff',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
})

const humidityLineChartData = reactive({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'humidity',
      backgroundColor: '#ffffff',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
})

const windspeedLineChartData = reactive({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'wind speed',
      backgroundColor: '#ffffff',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
})

let data: Array<any> = []
const doneFormatting = ref(false)

useHead({
  title: "Dashboard",
});

onMounted( async () => {
  console.log("on mounted ...")
  data = await useData('get_last_15')

  temperatureLineChartData.labels = data.map(e => e.timestamp.substr(11, 8))
  temperatureLineChartData.datasets[0].data = data.map(e => e.temperature)

  humidityLineChartData.labels = data.map(e => e.timestamp.substr(11, 8))
  humidityLineChartData.datasets[0].data = data.map(e => e.humidity)

  windspeedLineChartData.labels = data.map(e => e.timestamp.substr(11, 8))
  windspeedLineChartData.datasets[0].data = data.map(e => e.wind_speed)

  doneFormatting.value = true
})

function getCurrentMeanValue() {
  if(!data) return {
    temperature: '25',
    humidity: '88',
    wind_speed: '2',
  }
  const temperature = data?.map(e => e.temperature).reduce((prev, curr) => prev + curr, 0) / data.length
  const humidity = data?.map(e => e.humidity).reduce((prev, curr) => prev + curr, 0) / data.length
  const wind_speed = data?.map(e => e.wind_speed).reduce((prev, curr) => prev + curr, 0) / data.length

  return {
    temperature: temperature.toFixed(2),
    humidity: humidity.toFixed(2),
    wind_speed: wind_speed.toFixed(2),
  }
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Données de la ville de DAKAR <small>({{ latest?.timestamp.substr(0, 10) }} à {{ latest?.timestamp.substr(11, 5) }})</small></h1>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12 sm:col-span-6 md:lg:col-span-4">
        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between gap-2 h-full">
          <div class="flex flex-col justify-between">
            <div class="text-gray-500 dark:text-gray-400 font-medium">Humidité Relative</div>
            <div class="text-gray-700 dark:text-gray-200 font-bold text-lg">
              {{ latest?.humidity || '48' }}%
              <!-- <span class="text-sm text-yellow-600">+1%</span> -->
            </div>
          </div>
          <div
            class="bg-gradient-to-tl from-gray-600 to-gray-900 rounded-lg text-white p-2 flex items-center justify-center px-4">
            <TwFeather type="droplet"></TwFeather>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:lg:col-span-4">
        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between gap-2 h-full">
          <div class="flex flex-col justify-between">
            <div class="text-gray-500 dark:text-gray-400 font-medium">Température</div>
            <div class="text-gray-700 dark:text-gray-200 font-bold text-lg">
              {{ latest?.temperature || '31'}}°C
              <!-- <span class="text-sm text-yellow-600">+0°C</span> -->
            </div>
          </div>
          <div
            class="bg-gradient-to-tl from-gray-600 to-gray-900 rounded-lg text-white p-2 flex items-center justify-center px-4">
            <TwFeather type="thermometer"></TwFeather>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:lg:col-span-4">
        <div class="p-2 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between gap-2 h-full">
          <div class="flex flex-col justify-between">
            <div class="text-gray-500 dark:text-gray-400 font-medium">Vitesse du vent</div>
            <div class="text-gray-700 dark:text-gray-200 font-bold text-lg">
              {{ latest?.wind_speed || '21'}}Km/h
              <!-- <span class="text-sm text-red-600">+3Km/h</span> -->
            </div>
          </div>
          <div
            class="bg-gradient-to-tl from-gray-600 to-gray-900 rounded-lg text-white p-2 flex items-center justify-center px-4">
            <TwFeather type="wind"></TwFeather>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-2 mt-2">
      <div class="col-span-12">
        <div class="flex gap-2 rounded-lg p-4 shadow bg-white dark:bg-gray-800 justify-between">
          <div class="flex flex-col justify-between">
            <div class="">
              <div class="text-gray-500 dark:text-gray-400 font-medium">Sur les 15 dernières minutes</div>
              <div class="text-gray-700 dark:text-gray-200 font-bold text-xl">
                Température
              </div>
              <div class="">
                Avec une température moyenne d'environ: {{getCurrentMeanValue().temperature}}°C
              </div>
            </div>
            <div>
              <Line v-if="data && doneFormatting" :data="temperatureLineChartData" :options="chartOptions" />
            </div>
            <div class="">
              <!-- <TwButton variant="primary" :ripple="true">
                Recalculer
              </TwButton> -->
              <span>Prévision +3h : {{ prev_temp?.temperature?.toFixed(2) }}°C</span>
              <div class="">Moyenne heure: <b>{{ moy_hour?.temperature?.toFixed(2) }}°C</b> & moyenne jour <b>{{ moy_day?.temperature?.toFixed(2) }}°C</b></div>
            </div>
          </div>
          <div
            class="rounded-lg bg-gradient-to-tl from-gray-50 to-gray-200 dark:from-gray-700 flex items-center justify-center w-52 h-52">
            <img class="w-32 h-32 rounded object-cover" src="/images/temperature.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-span-12">
        <div class="flex gap-2 rounded-lg p-4 shadow bg-white dark:bg-gray-800 justify-between">
          <div class="flex flex-col justify-between">
            <div class="">
              <div class="text-gray-500 dark:text-gray-400 font-medium">Sur les 15 dernières minutes</div>
              <div class="text-gray-700 dark:text-gray-200 font-bold text-xl">
                Humidité Relative
              </div>
              <div class="">
                Avec une humidité moyenne d'environ: {{ getCurrentMeanValue().humidity }}%
              </div>
            </div>
            <Line v-if="data && doneFormatting" :data="humidityLineChartData" :options="chartOptions"  />
            <div class="">Moyenne heure: <b>{{ moy_hour?.humidity?.toFixed(2) }}%</b> & moyenne jour <b>{{ moy_day?.humidity?.toFixed(2) }}%</b></div>
          </div>
          <div
            class="rounded-lg bg-gradient-to-tl from-gray-50 to-gray-200 dark:from-gray-700 flex items-center justify-center w-52 h-52">
            <img class="w-32 h-32 rounded object-cover" src="/images/humidity.png" alt="" />
          </div>
        </div>
      </div>
      <div class="col-span-12">
        <div class="flex gap-2 rounded-lg p-4 shadow bg-white dark:bg-gray-800 justify-between">
          <div class="flex flex-col justify-between">
            <div class="">
              <div class="text-gray-500 dark:text-gray-400 font-medium">Sur les 15 dernières minutes</div>
              <div class="text-gray-700 dark:text-gray-200 font-bold text-xl">
                Vitesse du vent
              </div>
              <div class="">
                Avec une vitesse moyenne d'environ: {{ getCurrentMeanValue().wind_speed }} km/h
              </div>
            </div>
            <Line v-if="data && doneFormatting" :data="windspeedLineChartData" :options="chartOptions"  />
            <div class="">Moyenne heure: <b>{{ moy_hour?.wind_speed?.toFixed(2) }}km/h</b> & moyenne jour <b>{{ moy_day?.wind_speed?.toFixed(2) }}km/h</b></div>
          </div>
          <div
            class="rounded-lg bg-gradient-to-tl from-gray-50 to-gray-200 dark:from-gray-700 flex items-center justify-center w-52 h-52">
            <img class="w-32 h-32 rounded object-cover" src="/images/wind.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
