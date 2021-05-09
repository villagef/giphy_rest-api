import { createStore } from 'vuex';
import axios from "axios";
const API = "https://api.giphy.com/v1/gifs/";
const KEY = "HqAvKVtqkWGQusQ4RQzCOoRoaMsDjG3O";
const URL = `${API}search?api_key=${KEY}&q=cat&limit=10`;

export default createStore({
  state: {
    data: [],
    input: 'cat',
  },
  actions: {
    getData({ commit }) {
      axios.get(URL)
      .then(response => {
        console.log(response.data.data)
        commit('SET_POSTS', response.data.data)
      })
    }
  },
  getters: {
  },
  mutations: {
    SET_POSTS(state, data) {
      state.data = data
    }
  }
})
