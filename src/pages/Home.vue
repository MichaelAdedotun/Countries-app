<script setup>
  import { useCountriesStore } from '../store/countries';
  import { ref, onMounted } from 'vue';
  import SearchFilter from '../components/SearchFilter.vue';
  import CountryCard from '../components/CountryCard.vue';
  import Pagination from '../components/Pagination.vue';

    const store = useCountriesStore();
    const page = ref(1);

    onMounted(() =>{
      store.fetchCountries();
    });

</script>

<template>
  <div class="mx-8">
    <SearchFilter @update:search="store.filterCountries" />
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <CountryCard v-for="country in (store.filteredCountries || []).slice((page-1)*10, page*10)"
                   :key="country.cca3" :country="country"
      />
    </div>
    <Pagination :page="page" @prev="page--" @next="page++" class="mt-10" />
  </div>
</template>

<style scoped>

</style>