<template>
  <div class="home">
    <div class="section-search-select">
      <div class="search-container">
        <form>
          <div class="inner-form">
            <div class="basic-search">
              <div class="input-field">
                <div class="icon-wrap">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"
                    ></path>
                  </svg>
                </div>
                <input
                  id="search"
                  type="text"
                  placeholder="Search for a country ..."
                  v-model="searchValue"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="select-container">
        <Dropdown @getSelectedRegion="setRegion" />
      </div>
    </div>
    <div class="loading-container" v-if="spinner">
      <Spinner />
    </div>
    <div class="card-container" v-else>
      <card
        v-for="country in filteredCountries"
        :key="country.alpha3Code"
        :country="country"
      ></card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import Spinner from "../components/Spinner";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      selectedRegion: null,
      all: null,
      searchValue: "",
    };
  },
  components: {
    Spinner,
    Card,
    Dropdown,
  },
  computed: {
    ...mapGetters(["allCountries", "spinner"]),
    filteredCountries() {
      if (this.searchValue != "" && this.searchValue) {
        return this.allCountries.filter((country) =>
          country.name.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      }
      if (this.selectedRegion == null) {
        return this.allCountries;
      } else {
        return this.allCountries.filter(
          (country) => !country.region.indexOf(this.selectedRegion)
        );
      }
    },
  },
  methods: {
    ...mapActions(["fetchCountries"]),
    setRegion(selected, val) {
      this.selectedRegion = val;
      this.all = selected;
      //console.log(this.all);
      //console.log(this.selectedRegion);
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
