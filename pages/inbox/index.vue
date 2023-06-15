<script setup lang="ts">
useHead({
  title: 'Inbox'
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">
      Inbox
    </h1>
    <hr class="my-2 border dark:border-gray-700" />
    <div>
      <div class="rounded-lg bg-gradient-to-tl from-gray-50 to-gray-200 dark:from-gray-700 p-2 flex-col items-start justify-center">
        <h2 class="text-red-700 dark:text-red-200 font-bold text-xl">Error</h2>
        <p>
          WARN SparkEnv: Exception while deleting Spark temp dir: C:\Users\mouha\AppData\Local\Temp\spark-3bf024f4-7792-479a-a9d4-69815e9a34bd\userFiles-929f9aee-2f42-41aa-93d3-48187f12b656
        </p>
        <div class="text-right text-xs text-gray-400">23/06/15 12:48:13</div>
      </div>
    </div>
  </div>
</template>
