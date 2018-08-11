<template>
  <div class="wrapper">
    <div class="phone">
      <iframe class="example" :src="src" frameborder="0"></iframe>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      src: {
        type: String
      }
    }
  }
</script>
<style scoped>
  .wrapper {
    margin: 0 50px;
    position: relative;
    width: 400px;
  }

  .phone {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 375px;
    height: 667px;
    padding: 105px 25px;
    border-radius: 55px;
    background-color: #111111;
    &::before {
      content: ' ';
      width: 60px;
      height: 10px;
      border-radius: 10px;
      position: absolute;
      left: 50%;
      margin-left: -30px;
      background-color: #333333;
      top: 50px;
    }
    &::after {
      content: ' ';
      width: 60px;
      height: 60px;
      border-radius: 100%;
      position: absolute;
      left: 50%;
      margin-left: -30px;
      bottom: 20px;
      box-sizing: border-box;
      border: 5px solid #333;
    }
  }

  .example {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }
</style>
