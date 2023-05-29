<script setup lang="ts">
import { TwFeather, TwButton } from "vue3-tailwind";

useHead({
  title: "Dashboard",
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Données de la ville de DAKAR</h1>
    <hr class="my-2 border dark:border-gray-700" />
    <div class="grid grid-cols-12 gap-2">
      <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <div
          class="p-2 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between gap-2 h-full"
        >
          <div class="flex flex-col justify-between">
            <div class="text-gray-500 dark:text-gray-400 font-medium">Humidité Relative</div>
            <div class="text-gray-700 dark:text-gray-200 font-bold text-lg">
              48%
              <span class="text-sm text-yellow-600">+1%</span>
            </div>
          </div>
          <div
            class="bg-gradient-to-tl from-gray-600 to-gray-900 rounded-lg text-white p-2 flex items-center justify-center px-4"
          >
            <TwFeather type="droplet"></TwFeather>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <div
          class="p-2 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between gap-2 h-full"
        >
          <div class="flex flex-col justify-between">
            <div class="text-gray-500 dark:text-gray-400 font-medium">Température</div>
            <div class="text-gray-700 dark:text-gray-200 font-bold text-lg">
              31°C
              <span class="text-sm text-yellow-600">+0°C</span>
            </div>
          </div>
          <div
            class="bg-gradient-to-tl from-gray-600 to-gray-900 rounded-lg text-white p-2 flex items-center justify-center px-4"
          >
            <TwFeather type="thermometer"></TwFeather>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <div
          class="p-2 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between gap-2 h-full"
        >
          <div class="flex flex-col justify-between">
            <div class="text-gray-500 dark:text-gray-400 font-medium">Vitesse du vent</div>
            <div class="text-gray-700 dark:text-gray-200 font-bold text-lg">
              21Km/h
              <span class="text-sm text-red-600">+3Km/h</span>
            </div>
          </div>
          <div
            class="bg-gradient-to-tl from-gray-600 to-gray-900 rounded-lg text-white p-2 flex items-center justify-center px-4"
          >
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
                Avec une température moyenne d'environ: 29°C
              </div>
            </div>
            <div class="">
              <TwButton variant="primary" :ripple="true">
                Recalculer
              </TwButton>
            </div>
          </div>
          <div
            class="rounded-lg bg-gradient-to-tl from-gray-50 to-gray-200 dark:from-gray-700 flex items-center justify-center w-52 h-52"
          >
            <img
              class="w-32 h-32 rounded object-cover"
              src="/images/temperature.png"
              alt=""
            />
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
                Avec une humidité moyenne d'environ: 51%
              </div>
            </div>
            <div class="">Recalculer</div>
          </div>
          <div
            class="rounded-lg bg-gradient-to-tl from-gray-50 to-gray-200 dark:from-gray-700 flex items-center justify-center w-52 h-52"
          >
            <img
              class="w-32 h-32 rounded object-cover"
              src="/images/humidity.png"
              alt=""
            />
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
                Avec une vitesse moyenne d'environ:21 km/h
              </div>
            </div>
            <div class="">Recalculer</div>
          </div>
          <div
            class="rounded-lg bg-gradient-to-tl from-gray-50 to-gray-200 dark:from-gray-700 flex items-center justify-center w-52 h-52"
          >
            <img
              class="w-32 h-32 rounded object-cover"
              src="/images/wind.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
