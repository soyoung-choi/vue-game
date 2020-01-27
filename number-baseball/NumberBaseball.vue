<template>
  <div id="number-baseball" class="content">
    <h2 class="title">숫자 야구</h2>
    <p>{{ result }}</p>
    <!-- @submit.prevent :  submit할 때 새로고침 막아줌 -->
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" minlength="4" maxlength="5" v-model="value"/>
      <button type="submit">입력</button>
    </form>
    <div>시도: {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries" :key="t.try">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1) [0];
    array.push(chosen);
  }
  return array;
}

export default {
  data() {
    return {
      answer: getNumbers(), // ex) [1, 3, 4, 6]
      tries: [], // 시도 수
      value: '', // 입력
      result: '', // 결과
    }
  },
  methods: {
    onSubmitForm(e) {
      if (this.value === this.answer.join('')) {
        // 정답을 맞췄으면
        this.tries.push({
          try: this.value,
          result: '홈런',
        });
        this.result = '홈런';
        alert('게임을 다시 실행합니다.');
        // 초기화
        this.value = '';
        this.answer = getNumbers();
        this.tries = []
        this.$refs.answer.focus();
      } else { 
        // 정답 틀렸을 때
        if (this.tries.length >= 9) {
          // 10번째 시도했을 때
          this.result = `10번 넘게 실패했습니다. 
          답은 ${this.answer.join(',')} 였습니다.`;
          alert('게임을 다시 시작합니다.');
          // 초기화
          this.value = '';
          this.answer = getNumbers();
          this.tries = [];
          this.$refs.answer.focus();
        }
        let strike = 0;
        let ball = 0;
        // 문자열을 숫자배열로 바꾸는 코드
        const answerArray = this.value.split('').map(v => parseInt(v));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.answer[i]) {
            // 숫자 자리수 모두 정답
            strike++;
          } else if (this.answer.includes(answerArray[i])) {
            // 숫자만 정답
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크, ${ball} 볼입니다.`,
        });
        this.value = '';
        this.$refs.answer.focus();
      }
    }
  }
}
</script>