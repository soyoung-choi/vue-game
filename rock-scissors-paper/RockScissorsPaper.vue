<template>
  <div id="rock-scissors-paper" class="content">
    <h2 class="title">가위바위보</h2>
    <div id="computer" :style="computedStyleObject"></div>
    <div class="btn-wrap">
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div class="result">{{ result }}</div>
    <div class="score">현재 {{ score }}점</div>
  </div>
</template>

<script>
  const rspCoords = {
    바위: '0',
    가위: '-135px',
    보: '-285px',
  };

  const scores = {
    가위: '1',
    바위: '0',
    보: '-1',
  };

  const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
      return v[1] === imgCoord;
    })[0];
  };

  let interval = null;

  export default {
    data() {
      return {
        imgCoord: rspCoords.바위,
        result: '',
        score: 0,
      }
    },
    computed: {
      computedStyleObject() {
        return {
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
        };
      },
    },
    methods: {
      changeHand() {
        interval = setInterval(()=> {
          if (this.imgCoord === rspCoords.바위) {
            this.imgCoord = rspCoords.가위;
          } else if (this.imgCoord === rspCoords.가위) {
            this.imgCoord = rspCoords.보;
          } else if (this.imgCoord === rspCoords.보) {
            this.imgCoord = rspCoords.바위;
          }
        }, 500);
      },
      onClickButton(choice) {
        clearInterval(interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(this.imgCoord)];
        const diff = myScore - cpuScore;

        if (diff === 0) {
          this.result = '비겼습니다.';
        } else if ([-1, 2].includes(diff)) {
          this.result = '이겼습니다.';
          // 이기면 1점 플러스
          this.score += 1;
        } else {
          this.result = '졌습니다.';
          // 지면 1점 마이너스
          this.score -= 1;
        }
        setTimeout(() => {
          this.changeHand();
        }, 2000);
      },
    },
    beforeCreat() {
      console.log('beforeCreated');
    },
    // 데이터가 모두 준비되면 실행
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    // 화면이 다 보여지면 실행 = DOM Ready
    mounted() {
      console.log('mounted');
      this.changeHand();
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    beforeDestroy() {
      console.log('beforeDestroy');
      // 메모리 누수 방지
      clearInterval(interval);
    },
    destroyed() {
      console.log('destroyed');
    },
  }
</script>

<style scoped>
  #computer {
    width: 145px;
    height: 200px;
    background-position: 0 0;
    background-image: url();
  }
</style>