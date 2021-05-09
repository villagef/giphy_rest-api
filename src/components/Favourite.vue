<template>
<h1>Favourites</h1>
  <div class="favourite-container">
    <div v-for="d in data" :key="d.id">
      <img :src="d.images.downsized.url" width="250" image />
      <button @click="handleRemove(d.id)" :id="d.id">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favourite",
  methods: {
      handleRemove(id) {
          const data = JSON.parse(localStorage.getItem("favourite"));
          const newData = data.data.filter(d => d.id !== id);
          localStorage.setItem("favourite", JSON.stringify({ data: newData }));
      }
  },  
  computed: {
    data() {
      const localData = JSON.parse(localStorage.getItem("favourite"));
      return localData.data;
    },
  },
};
</script>

<style scoped>
button {
  width: 100%;
}

.favourite-container {
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
