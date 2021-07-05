<template>
  <div>
    <div class="select_wrap">
      <ul class="default_option" @click="openDropdown()">
        <li>
          <div class="option pizza">
            <p>{{ selected }}</p>
          </div>
        </li>
      </ul>
      <ul class="select_ul" v-show="showDropdown">
        <div
          v-for="(region, index) in AllRegions"
          :key="index"
          v-bind:value="region.value"
        >
          <li>
            <div class="option pizza" @click="selectRegion(region)">
              <p @click="seletedOption(region)">
                {{ region.text }}
              </p>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Select",
  data() {
    return {
      showDropdown: false,
      selected: "Filter By Region",
      selectedItem: null,
    };
  },
  computed: {
    ...mapGetters(["allCountries", "AllRegions"]),
  },
  methods: {
    openDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    seletedOption(el) {
      this.showDropdown = false;
      this.selected = el.text;
      //console.log(el.text);
    },
    selectRegion(id) {
      this.selectedItem = id.text;
      this.$emit("getSelectedRegion", this.selectedItem, this.selected);
      //console.log(id.text);
    },
  },
};
</script>

<style></style>
