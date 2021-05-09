<template>
  <div class="giphy-container">

  </div>
</template>

<script>
export default {
  name: 'GiphyContainer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .giphy-container {
    width: 90vw;
    max-width: 1000px;
    min-height: 500px;
    border: 1px solid grey;
    margin: 30px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
</style>
