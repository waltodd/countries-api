<template>
  <div id="app" :class="{ 'theme-dark': nightMode }">
    <div class="header">
      <a class="logo">Where in the World?</a>
      <div class="header-right">
        <a
          ><input type="checkbox" v-model="nightMode" />
          <i class="far fa-moon"></i>Dark Mode
        </a>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      nightMode: false,
    };
  },
  watch: {
    nightMode: function () {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
      console.log(this.nightMode);
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  },
};
</script>
<style></style>
