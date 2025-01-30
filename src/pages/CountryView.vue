<script setup>
import { useCountriesStore } from '../store/countries';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CountryDetails from '../components/CountryDetails.vue';


    const store = useCountriesStore();
    const route = useRoute();
    onMounted(() => store.fetchCountries());
    const country = computed(() =>
        store.countries.find(c => c.name.common === route.params.name)
    );

</script>

<template>
  <div class="flex justify-center">
    <CountryDetails v-if="country" :country="country"/>
  </div>
</template>

<style scoped>

</style>