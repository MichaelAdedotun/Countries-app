<script setup>

  const props = defineProps(['page'])
</script>

<template>
  <div class="flex justify-between items-center mt-4">
    <button @click="$emit('prev')" :disabled="page === 1" class="px-4 py-2 bg-gray-300 rounded">Previous</button>
    <span>Page {{ page }}</span>
    <button @click="$emit('next')" class="px-4 py-2 bg-gray-300 rounded">Next</button>
  </div>
</template>

<style scoped>

</style>