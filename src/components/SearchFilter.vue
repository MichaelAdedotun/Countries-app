<script setup>
  import { useCountriesStore } from '../store/countries';
  import { watch, ref } from 'vue';

  const store = useCountriesStore();

  const search = ref(store.searchQuery);
  const selectedContinent = ref(store.selectedContinent);

  watch(search, (newQuery) => {
    store.filterCountries(newQuery);
  });

  watch(selectedContinent, (newContinent) => {
    store.filterByContinent(newContinent);
  });

  const emit = defineEmits(["update:search", "update:continent"]);

  const updateSearch = () => {
    emit("update:search", search.value);
  };

  const updateContinent = () => {
    emit('update:continent', selectedContinent.value);
  };
</script>

<template>
  <div class="md:flex md:justify-between mt-5 mb-10">
    <input type="text" v-model="search"
           @input="updateSearch"
           placeholder="Search countries..."
           class="py-2 px-5 outline-0 w-full md:w-1/3"
    />
    <select v-model="selectedContinent"
            @change="updateContinent"
            class="bg-white mt-5 py-2 px-5 outline-none w-full md:mt-0 md:w-1/4 text-gray-400"
    >
      <option value="">All Continents</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<style scoped>

</style>