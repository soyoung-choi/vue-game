<template>
  <div id="multiplication-table" class="content">
    <h2 class="title">구구단</h2>
    <div class="multiplication-table">
      <div class="cal">{{ first }} X {{ second }} = ?</div>
      <form @submit="onSubmitForm">
        <input type="number" v-model="value" ref="answer" value="숫자를 입력해주세요."/>
        <button type="submit">입력</button>
      </form>
      <div class="result">{{ result }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
      }
    },
    methods: {
      onSubmitForm(e) {
        // 페이지 새로고침 막음
        e.preventDefault();

        if(this.first * this.second === parseInt(this.value)) {
          this.result = '딩동댕';
          this.first = Math.ceil(Math.random() * 9);
          this.second = Math.ceil(Math.random() * 9);
          this.value = '';
          this.$refs.answer.focus();
        } else {
          this.result = '땡'
          this.value = '';
          this.$refs.answer.focus();
        }
      },
    }
  }
</script>
