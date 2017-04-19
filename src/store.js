import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var store = {
  state: {
    boards: [
      {id: 1, name: 'Food'},
      {id: 2, name: 'House'}
    ],
    lists: [
      {id: 1, name: 'Vego', board_id: 1}
    ]
  }
}

export default new Vuex.Store(store)
