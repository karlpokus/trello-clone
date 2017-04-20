import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var store = {
  state: {
    boards: [
      {id: 1, name: 'Food'},
      {id: 2, name: 'Home'}
    ],
    lists: [
      {id: 1, name: 'Vego', board_id: 1},
      {id: 2, name: 'Meats', board_id: 1},
      {id: 3, name: 'Tools', board_id: 2}
    ],
    cards: [
      {id: 1, content: 'vego food is delicious', list_id: 1},
      {id: 2, content: 'meat is nice too', list_id: 2}
    ]
  },
  getters: {
    compileBoard: function (state, getters) {
      function getListsAndCards (id) {
        return state.lists
          .filter(function (list) {
            return list.board_id === id
          })
          .map(function (list) {
            list.cards = state.cards
              .filter(function (card) {
                return card.list_id === list.id
              })
            return list
          })
      }
      return function (boardId) {
        var id = Number(boardId)
        var board = state.boards
              .filter(function (board) {
                return board.id === id
              })[0]
        board.lists = getListsAndCards(id)
        return board
      }
    }
  }
}

export default new Vuex.Store(store)
