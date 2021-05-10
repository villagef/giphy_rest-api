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
    },
    getInput({ commit }, input) {
      commit('SET_POSTS', input)
    }
  },
  getters: {
  },
  mutations: {
    SET_POSTS(state, data) {
      state.data = data
    },
    SET_INPUT(state, input) {
      state.input = input
    }
  }
})
