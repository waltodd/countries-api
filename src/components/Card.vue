<template>
  <div class="row">
    <div class="column">
      <div class="card">
        <div class="country-flag">
          <router-link
            :to="{
              name: 'CountryDetail',
              params: { alpha: country.alpha3Code },
            }"
          >
            <img :src="country.flag" />
          </router-link>
        </div>
        <div class="country-description">
          <p class="country-title">{{ country.name }}</p>
          <p>
            Population: <span>{{ formatPopulation(country.population) }}</span>
          </p>
          <p>
            Region: <span>{{ country.region }}</span>
          </p>
          <p>
            Capital: <span>{{ country.capital }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["country"],
  methods: {
    formatPopulation(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>
