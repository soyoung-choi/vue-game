<template>
  <div id="game-matcher">
    <div v-if="currentGame === 'multiplication-table'">
      <MultiplicationTable></MultiplicationTable>
    </div>
    <div v-if="currentGame === 'word-relay'">
      <WordRelay></WordRelay>
    </div>
    <div v-if="currentGame === 'number-baseball'">
      <NumberBaseball></NumberBaseball>
    </div>
    <div v-if="currentGame === 'response-check'">
      <ResponseCheck></ResponseCheck>
    </div>
    <div v-if="currentGame === 'rock-scissors-paper'">
      <RockScissorsPaper></RockScissorsPaper>
    </div>
    <div v-if="currentGame === 'lotto-generator'">
      <LottoGenerator></LottoGenerator>
    </div>
  </div>
</template>

<script>
import GameMatcher from './GameMatcher'
import MultiplicationTable from '../multiplication-table/MultiplicationTable'
import WordRelay from '../word-relay/WordRelay'
import NumberBaseball from '../number-baseball/NumberBaseball'
import ResponseCheck from '../response-check/ResponseCheck'
import RockScissorsPaper from '../rock-scissors-paper/RockScissorsPaper'
import LottoGenerator from '../lotto-generator/LottoGenerator'

export default {
  computed: {
    currentGame() {
      return this.$route.params.name;
    }
  },
  components: {
    MultiplicationTable,
    WordRelay,
    GameMatcher,
    NumberBaseball,
    ResponseCheck,
    RockScissorsPaper,
    LottoGenerator,
  },

}
</script>

<style>
  #game-matcher {
    width: 70%;
    float: right;
  }
</style>