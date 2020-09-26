import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    objects: [],
    object: undefined,
    collection: []
  },
  mutations: {
    GET_OBJECTS(state, objects) {
      state.objects = objects
    },
    GET_OBJECT(state, object) {
      state.collection.push(object)
    },
  },
  actions: {
    getObjects({
      commit
    }, depto) {
      axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=' + depto)
        .then((response) => {
          response = response.data.objectIDs.slice(0, 5)
          for (var i = 0; i < 5; i++) {
            axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + response[i]).then((response2) => {
              commit('GET_OBJECT', response2.data)
            })
          }
          commit('GET_OBJECTS', response)
        })
        .catch(e => {
          console.log(e);
        })
    },
  },
  modules: {}
})