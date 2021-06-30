<template>
  <div class="home">
    <div class="section-search-select">
      <div class="search-container">
        <Input />
      </div>
      <div class="select-container">
        <Dropdown />
      </div>
    </div>
    <div class="card-container">
      <Cards />
    </div>
  </div>
</template>

<script>
import Input from "../components/Input";
import Cards from "../components/Cards";
import Dropdown from "../components/Dropdown";


export default {
  name: "Home",
  components: {
    Cards,
    Input,
    Dropdown,
  },
  
};
</script>
