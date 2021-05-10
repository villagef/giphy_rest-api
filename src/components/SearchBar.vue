<template>
  <div class="searchWrapper">
    <form @submit="handleSearch">
      <input @input="handleInputValue" type="text" name="search" id="search-bar">
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    handleSearch(e) {
      e.preventDefault();
      console.log(e.target[0].value);
      this.$store.dispatch("getInput", e.target[0].value);
    },
    handleInputValue(e) {
      console.log(e.target.value);

      return e.target.value;
    },
  },
  data() {
    return {
      search: { text: "" },
    };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
