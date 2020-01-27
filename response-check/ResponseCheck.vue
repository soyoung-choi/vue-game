<template>
  <div id="response-check" class="content">
    <h2 class="title">반응속도 체크</h2>
    <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
    <!-- 템플릿은 없는 셈 치는 것, 쓸데없이 div로 묶지 않기 -->
    <template v-if="result.length">
      <div class="average">
        <div>
          평균 시간 : 
          <span class="average-time">{{ average }}</span>
          ms 
        </div>
        <button @click="onReset" class="reset">리셋</button>
      </div>
    </template>
  </div>
</template>

<script>
// 화면이랑 관련이 없기 때문에 데이터에 넣지 않음
let startTime = 0;
let endTime = 0;
let timeout = null;

export default {
  data() {
    return {
      result: [],
      state: 'waiting',
      message: '클릭해서 시작하세요.',
    }
  },
  computed: {
    average() {
      // reduce : 배열 다 더하는 함수
      // 다 더한 값에서 개수로 나누면 평균 값 나옴
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
    }
  },
  methods: {
    onReset() {
      // 결과 초기화
      this.result = []
    },
    onClickScreen() {
      if (this.state === 'waiting') {
        this.state = 'ready';
        this.message = '초록색이 되면 클릭하세요!';
        timeout = setTimeout(()=> {
          this.state = 'now';
          this.message = '지금 클릭하세요!';
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000); // 2-3초
      } else if (this.state === 'ready') {
        // 기존 타임아웃 없애줌
        clearTimeout(timeout);
        this.state = 'waiting';
        this.message = '초록색이 된 후에 클릭하세요!';
      } else if (this.state === 'now') {
        endTime = new Date();
        this.state = 'waiting';
        this.message = '클릭해서 시작하세요!';
        this.result.push(endTime - startTime);
      }
    }
  }
}
</script>

<style scoped>
  /* 
  - scoped를 붙이면 더 성능이 좋아짐
  - 이 컴포넌트 내에서 유효한 스타일
  - 다른 스타일과 겹칠 수 있으므로, 전역에서 사용하는 경우 제외하곤 scoped를 붙여줌 
  */
  #response-check {
    box-sizing: border-box;
    margin: 50px auto;
    width: 500px;
    text-align: center;
    background-color: white;
    padding: 50px;
  }
  #screen {
    width: 220px;
    height: 220px;
    text-align: center;
    user-select: none;
    border-radius: 50%;
    padding: 50px;
    line-height: 220px;
    margin: 0 auto;
    display: inline-block;
    box-shadow: 5px 5px 5px #eee;
  }
  #screen.waiting {
    background-color:yellow;
  }
  #screen.ready {
    background-color:red;
    color: white;
  }
  #screen.now {
    background-color: green;
    color: white;
  }
  .average {
    padding: 20px 0;
  }
  .average .average-time {
    color: #3a89ff;
    font-weight: bold;
  }
  .average .reset {
    background-color: #7eb2ff;
    border: none;
    padding: 10px 50px;
    border-radius: 20px;
    margin-top: 10px;
    box-shadow: 5px 5px 5px #eee;
    color: white;
    font-size: 14px;
    line-height: 22px;
  }
  .average .reset:hover {
    background-color: #3a89ff;
    cursor: pointer;
  }
</style>