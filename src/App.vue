<template>
  <div id="app">
    <h1>Trällo</h1>
    <select v-on:change="selectBoard">
      <option value="">no board selected</option>
      <option v-for="board in boards" :value="board.id">
        {{board.name}}
      </option>
    </select>
    <input type="text" placeholder="New board">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    boards: function () {
      return this.$store.state.boards
    }
  },
  methods: {
    selectBoard: function (e) {
      this.$router.push({
        path: '/board',
        query: {
          id: e.target.value
        }
      })
    }
  },
  name: 'app'
}
</script>

<style>
#app {}
</style>
