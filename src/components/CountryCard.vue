<script setup>

  const props = defineProps(['country']);
</script>

<template>
  <div class="bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer"
       @click="$router.push(`/country/${country.name.common}`)"
  >
    <div class="">
      <img :src="country.flags.svg" alt="Flag" class="w-full h-44 object-cover rounded-t-xl" />
    </div>
    <div class="p-5">
      <h2 class="text-lg font-bold mt-2">{{ country.name.common }}</h2>
      <p class="text-sm text-gray-600">Population: {{ country.population.toLocaleString() }}</p>
      <p class="text-sm text-gray-600">Region: {{ country.region }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>