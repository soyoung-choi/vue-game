<template>
  <div id="lotto-generator" class="content">
    <h2 class="title">로또 생성기</h2>
    <div class="number-wrap">
      <p>당첨 숫자</p>
      <div class="ball-wrap">
        <LottoBall class="lotto-ball" v-for="ball in winBalls" :key="ball" :number="ball">
          {{ ball }}
        </LottoBall>
      </div>
    </div>
    <div class="bonus-wrap">
      <p>보너스</p>
      <LottoBall v-if="bonus" class="bonus-ball" :number="bonus">{{ bonus }}</LottoBall>
    </div>
    <div class="btn-wrap">
      <button v-if="redo" @click="onClickRedo">한번 더</button>
    </div>
  </div>
</template>

<script>
  import LottoBall from './LottoBall';

  function getWinNumbers() {
    const candidate = Array(45).fill().map((v, i) => i + 1); 
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  }
  
  const timeouts = [];

  export default {
    data() {
      return {
        winNumbers: getWinNumbers(),
        winBalls: [],
        bonus: null,
        redo: false,
      }
    },
    component: {
      LottoBall,
    },
    methods: {
      showBalls() {
        for (let i = 0; i < this.winNumbers.length - 1; i++) {
          timeouts[i] = setTimeout(()=> {
            this.winBalls.push(this.winNumbers[i]);
          }, (i + 1) * 1000);
        };
        timeouts[6] = setTimeout(() => {
          this.bonus = this.winNumbers[6];
          this.redo = true;
        }, 7000);
      },
      onClickRedo() {
        // 초기화
        this.winNumbers = getWinNumbers();
        this.winBalls= [];
        this.bonus = null;
        this.redo = false;
        this.showBalls();
      },
    },
    mounted() {
      this.showBalls();
    },
    beforeDestory() {
      timeouts.forEach((t) => {
        clearTimeout(t);
      })
    },
  }
</script>

<style scoped>
  .number-wrap, 
  .bonus-wrap {
    border-bottom: 1px solid #ccc;
    padding: 20px;
  }
  .ball-wrap {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0;
  }
  .lotto-ball, 
  .bonus-ball {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    font-size: 20px;
    line-height: 55px;
    text-align: center;
    margin-right: 20px;
    color: #333;
    border: 1px solid black;
  }
  .btn-wrap {
    margin: 20px 0;
  }
  .btn-wrap button {
    background-color: rgb(89, 67, 231);
    color: white;
    border: none;
    padding: 10px 40px;
    font-size: 14px;
    border-radius: 2px;
  }
</style>
