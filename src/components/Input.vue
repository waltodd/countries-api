<template>
  <div>
    <div><img src="../assets/icons/search.svg" /></div>
    <input type="text" placeholder="Search for a country ..." v-model="name" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Germany",
    };
  },
  methods: {
    sendName() {
      console.log(this.name);
      this.$emit("getInputName", this.name);
    },
  },
};
</script>

<style></style>
