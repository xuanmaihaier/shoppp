<template>
  <ul id="tab-bar">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
/* @import url("assets/css/base.css"); */
#tab-bar {
  height: 49px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  background-color: #f6f6f6;
  box-shadow: 0px -2px 3px rgba(0, 0, 0, .2);
}
</style>