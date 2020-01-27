<template>
  <div id="game-main">
    <h1 class="logo">choibug Homework</h1>
    <div class="nav">
      <router-link to="/game">HOME</router-link>
      <router-link to="/game/multiplication-table">구구단</router-link>
      <router-link to="/game/word-relay">끝말잇기</router-link>
      <router-link to="/game/number-baseball">숫자 야구</router-link>
      <router-link to="/game/response-check">반응속도</router-link>
      <router-link to="/game/rock-scissors-paper">가위바위보</router-link>
      <router-link to="/game/lotto-generator">로또 생성기</router-link>
    </div>
    <!-- 바뀌는 화면이 렌더링됨 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import router from './routes';

  export default {
    router,
  }
</script>

<style>
  #game-main {
    width: 800px;
    margin: 80px auto;
  }
  .logo {
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    border-bottom: 1px solid black;
    padding: 20px 0;
    margin: 40px 0;
  }
  .nav {
    float: left;
    width: 20%;
    box-sizing: border-box;
    margin-right: 10%;
  }
  .nav a {
    color: #666;
    text-decoration: none;
    display: block;
    padding: 20px 0;
    font-size: 14px;
    line-height: 22px;
  }
  .title {
    font-size: 20px;
    color: #333;
  }

  input {
    border: 1px solid #e0e0e0;
    width: 100%;
    background-color: #f9f9f9;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 2px;
  }
  input:hover {
    border: 1px solid dodgerblue;
  }
  button {
    width: 100%;
    text-align: center;
    background-color: dodgerblue;
    color: white;
    padding: 10px;
    border: none;
    font-size: 16px;
    line-height: 24px;
    border-radius: 2px;
  }
  button:hover {
    box-shadow: 5px 5px 5px #cae5ff;
    cursor: pointer;
  }
  .result {
    color:dodgerblue;
    padding-top: 10px;
  }
</style>