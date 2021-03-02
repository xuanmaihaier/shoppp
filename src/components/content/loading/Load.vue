<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name:"Load"
}
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  background: url("~@/assets/img/load/load.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  z-index: 999;
}
</style>