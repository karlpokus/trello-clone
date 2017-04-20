<template>
  <div>
    <p>{{board.name}}</p>
    <ul>
      <li v-for="(list, listIndex) in board.lists" :key="list.id">
        {{list.name}}
        <ul>
          <li v-for="(card, cardIndex) in list.cards" :key="card.id">
            {{card.content}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    board: function () {
      return this.$store.getters.compileBoard(this.$route.params.id)
    }
  }
}
</script>
