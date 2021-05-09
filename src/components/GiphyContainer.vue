<template>
  <div class="giphy-container">
    <div class="card" v-for="d in data" :key="d.id">
      <img :src="d.images.downsized.url" image />
      <button @click="handleAdd(d)" :id="d.id">Add to favourite</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GiphyContainer",
  methods: {
    handleAdd(item) {
      const restore = JSON.parse(localStorage.getItem("favourite"));
      restore.data.push(item);
      localStorage.setItem("favourite", JSON.stringify(restore));
    },
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
  mounted() {
    this.$store.dispatch("getData");
    localStorage.getItem("favourite") == null &&
      localStorage.setItem("favourite", JSON.stringify({ data: [] }));
  },
};
</script>

<style scoped>
button {
  width: 100%;
}

.card {
  width: auto;
  max-width: 250px;
  padding: 10px;
}
img {
  width: 100%;
}

.giphy-container {
  width: 90vw;
  max-width: 1200px;
  min-height: 500px;
  border: 1px solid grey;
  margin: 30px auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
</style>
