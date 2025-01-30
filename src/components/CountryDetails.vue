<script setup>
import { useCountriesStore } from '../store/countries';
import { computed } from 'vue';
import {createRouter as $router, useRoute} from 'vue-router';

    const store = useCountriesStore();
    const route = useRoute();
    const country = computed(() =>
        store.countries.find(c => c.name.common === route.params.name)
    );

</script>

<template>
  <div class="p-6 bg-white shadow-lg rounded-lg">
    <img :src="country.flags.svg" alt="Flag" class="w-full h-44 object-cover rounded-md" />
    <h2 class="text-2xl font-bold my-5">{{ country.name.common }}</h2>
    <p><strong>Capital:</strong> {{ country.capital }}</p>
    <p><strong>Region:</strong> {{ country.region }}</p>
    <p><strong>Population:</strong> {{ country.population.toLocaleString() }}</p>
    <p><strong>Languages:</strong> {{ Object.values(country.languages).join(', ') }}</p>
    <p><strong>Currency:</strong> {{ Object.values(country.currencies)[0].name }}</p>
    <button @click="this.$router.push('/')" class="mt-8 px-4 py-1 bg-gray-300 rounded">Back</button>
  </div>
</template>

<style scoped>

</style>