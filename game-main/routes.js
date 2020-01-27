import Vue from 'vue';
import VueRouter from 'vue-router';

import GameMatcher from './GameMatcher'
import MultiplicationTable from '../multiplication-table/MultiplicationTable'
import WordRelay from '../word-relay/WordRelay'
import NumberBaseball from '../number-baseball/NumberBaseball'
import ResponseCheck from '../response-check/ResponseCheck'
import RockScissorsPaper from '../rock-scissors-paper/RockScissorsPaper'
import LottoGenerator from '../lotto-generator/LottoGenerator'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/game/:name',
      component: GameMatcher,
    },
    {
      path: '/multiplication-table',
      component: MultiplicationTable,
    },
    {
      path: '/word-relay',
      component: WordRelay,
    },
    {
      path: '/number-baseball',
      component: NumberBaseball,
    },
    {
      path: '/response-check',
      component: ResponseCheck,
    },
    {
      path: '/rock-scissors-paper',
      component: RockScissorsPaper,
    },
    {
      path: '/lotto-generator',
      component: LottoGenerator,
    },
    
  ]
})