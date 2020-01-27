<template>
  <div class="ball" :style="{ styleObject }">{{ number }}</div>
</template>

<script>
  export default {
    name: 'LottoBall',
    props: {
      number: Number, // 자바스크립트 자료형
    },
    computed: {
      styleObject() {
        let background;
        if (this.number <= 10) {
          background = 'red';
        } else if (this.number <= 20) {
          background = 'orange';
        } else if (this.number <= 30) {
          background = 'yellow';
        } else if (this.number <= 40) {
          background = 'green';
        } else {
          background = 'blue';
        }
        return {
          background,
        }
      }
    } 
  }
</script>

<style scoped>
  
</style>