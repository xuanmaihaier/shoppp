<template>
  <div class="backtop">
    <img src="@/assets/img/home/back.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.backtop {
  position: fixed;
  right: 20px;
  bottom: 60px;
  z-index: 10;
  background-color: white;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 50%;
  text-align: center;
}
.backtop img {
  padding-top: 12px;
}
</style>