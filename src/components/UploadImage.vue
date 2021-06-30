<template>
  <div class="upload-container">
    <input type="file" @change="fileSelected" />
    <button @click="upload">Upload</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    fileSelected(event) {
      this.selectedFile = event.target.file[0]
    },
    async upload(){

    }
  },
};
</script>

<style></style>
