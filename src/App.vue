<template>
  <h1>Giphy search app</h1>
  <SearchBar />
  <GiphyContainer />
  <Favourite />
</template>

<script>
import GiphyContainer from './components/GiphyContainer.vue'
import SearchBar from './components/SearchBar.vue'
import Favourite from './components/Favourite.vue'

export default {
  name: 'App',
  components: {
    GiphyContainer,
    SearchBar,
    Favourite
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
