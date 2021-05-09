<template>
  <h1>Giphy search app</h1>
  <SearchBar />
  <GiphyContainer />
</template>

<script>
import GiphyContainer from './components/GiphyContainer.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  components: {
    GiphyContainer,
    SearchBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
