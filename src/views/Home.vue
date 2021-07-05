<template>
  <div class="home">
    <div class="section-search-select">
      <div class="search-container">
        <Input @getInputName="setName" />
      </div>
      <div class="select-container">
        <Dropdown @getSelectedRegion="setRegion" />
      </div>
    </div>
    <div class="card-container">
      <card
        v-for="country in filterCountriesByRegion"
        :key="country.alpha3Code"
        :country="country"
      ></card>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      selectedRegion: null,
      all: null,
    };
  },
  components: {
    Card,
    Input,
    Dropdown,
  },
  computed: {
    ...mapGetters(["allCountries"]),
    filterCountriesByRegion() {
      if (this.selectedRegion == null) {
        return this.allCountries;
      } else {
        return this.allCountries.filter(
          (country) => !country.region.indexOf(this.selectedRegion)
        );
      }
    },
    filterCountriesByName: function () {
      return this.allCountries.filter(
        (country) => !country.name.indexOf(this.name)
      );
    },
  },
  methods: {
    ...mapActions(["fetchCountries"]),
    setRegion(selected, val) {
      this.selectedRegion = val;
      this.all = selected;
      console.log(this.all);
      console.log(this.selectedRegion);
    },
    setName(value) {
      console.log(value);
    },
  },
  mounted() {
    this.fetchCountries();
  },
};
</script>
