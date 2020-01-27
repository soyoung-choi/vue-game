<template>
  <div id="word-relay" class="content">
    <h2 class="title">끝말잇기 게임</h2>
    <word-relay start-word="딸기"></word-relay>
    <word-relay start-word="수박"></word-relay>
    <word-relay start-word="키위"></word-relay>

    <div class="word">{{ word }}</div>
    <form @submit="onSubmitForm">
      <input type="text" ref="answer" v-model="value"/>
      <button type="submit">입력</button>
    </form>
    <div class="result">{{ result }}</div>
  </div>
</template>

<script>
  export default {
    props: ['startWord'],
    data() {
      return {
        word: this.startWord,
        value: '',
        result: '',
      }
    },
    methods: {
      onSubmitForm(e) {
        e.preventDefault();
        if(this.word[this.word.length - 1] === this.value[0]) {
          this.result = '딩동댕';
          this.word = this.value;
          this.value = '',
          this.$refs.answer.focus();
        } else {
          this.result = '땡';
          this.value = '',
          this.$refs.answer.focus();
        }
      }
    },
  }
</script>

<style scoped>
  .word-relay {
    padding: 20px 0;
  }
  .word {
    padding-bottom: 10px;
  }
</style>