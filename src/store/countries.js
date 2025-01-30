import {defineStore} from "pinia";
import axios from "axios";

export const useCountriesStore = defineStore('countries', {
    state: () => ({
        countries: [],
        filteredCountries: [],
        searchQuery: '',
    }),
    actions: {
        async fetchCountries(){
            try {
                const response =  await axios.get('https://restcountries.com/v3.1/all');
                this.countries = response.data;
                this.filteredCountries = response.data;
            }
            catch (error){
                console.error('Error fetching countries:', error);
            }
        },
        filterCountries(query) {
            this.searchQuery = query;
            this.filteredCountries = this.countries.filter( country =>
                country.name.common.toLowerCase().includes(query.toLowerCase())
            );
        },
        filterByContinent(continent) {
            this.selectedContinent = continent;
            this.filteredCountries = this.countries.filter(country =>
                (continent === '' || country.region === continent) &&
                country.name.common.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    }
})
