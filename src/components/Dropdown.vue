<template>
  <div>
    <div class="select_wrap">
      <ul class="default_option" @click="openDropdown()">
        <li>
          <div class="option pizza">
            <p>{{ selected}}</p>
          </div>
        </li>
      </ul>
      <ul class="select_ul" v-show="showDropdown">
        <div
          v-for="(option, index) in options"
          :key="index"
          v-bind:value="option.value"
        >
          <li>
            <div class="option pizza">
              <p @click="seletedOption(option)">{{ option.text }}</p>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      showDropdown: false,
      selected: "Filter By Region",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
  methods: {
    openDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    seletedOption(el){
      this.showDropdown = false;
      this.selected = el.text
      console.log(el.text)
    }
  },
};
</script>

<style></style>
