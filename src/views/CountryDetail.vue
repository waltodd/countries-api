<template>
  <div>
    <div class="detail-container">
      <div class="btn-container">
        <div class="back-btn">
          <router-link :to="{ name: 'Home' }"
            ><button>
              <img src="../assets/icons/left.png" /> Back
            </button></router-link
          >
        </div>
      </div>
      <div class="detail-content">
        <div class="detail-flag">
          <img :src="singleCountry.flag" alt="" />
        </div>
        <div>
          <div class="section-one">
            <p class="country-title">{{ singleCountry.name }}</p>
            <p>
              Native Name: <span>{{ singleCountry.nativeName }}</span>
            </p>
            <p>
              Population: <span>{{ singleCountry.population }}</span>
            </p>
            <p>
              Region: <span>{{ singleCountry.region }}</span>
            </p>
            <p>
              Sub Region: <span>{{ singleCountry.subregion }}</span>
            </p>
            <p>
              Capital: <span>{{ singleCountry.capital }}</span>
            </p>
          </div>
          <div class="section-two">
            <p>
              Top Level Domain:
              <span
                v-for="(domain, index) in singleCountry.topLevelDomain"
                :key="index"
                >{{ domain }}</span
              >
            </p>
            <p>
              Currencies:
              <span
                v-for="(currencie, index) in singleCountry.currencies"
                :key="index"
                >{{ currencie.name }}</span
              >
            </p>
            <p>
              Languages:
              <span
                v-for="(language, index) in singleCountry.languages"
                :key="index"
                >{{ language.name }}</span
              >
            </p>
          </div>
        </div>
        <div>
          <div class="border-container">
            <p class="border-title">Border Countries</p>
            <div
              class="btn-border-container"
              v-for="border in bordersCountry"
              :key="border.alpha3Code"
            >
              <router-link
                :to="{
                  name: 'CountryDetail',
                  params: { alpha: border.alpha3Code },
                }"
              >
                <button class="border-btn">
                  {{ border.name }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      alpha: this.$route.params.alpha,
    };
  },
  computed: {
    ...mapGetters(["singleCountry", "bordersCountry"]),
  },
  watch: {
    "$route.params.alpha": {
      handler: function (newVal) {
        this.alpha = newVal;
        this.getSingleCountry();
        //console.log(`The new value is ${newVal} and old value is ${oldVal}`);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["fetchCountry"]),
    getSingleCountry() {
      this.fetchCountry(this.alpha);
    },
  },
  created() {
    this.getSingleCountry();
  },
};
</script>

<style></style>
