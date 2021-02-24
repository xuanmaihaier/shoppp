<template>
  <ul class="ul-home">
    <li v-for="(item,index) in recommend.list" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name:"UiList",
  props:["recommend"]
  
}
</script>

<style scoped>
.ul-home{
  display: flex;
  text-align: center;
  font-size: 14px;
}
.ul-home li{
  flex: 1;
}
.ul-home img{
  width: 90%;
}
.ul-home p{
  line-height: 28px;
}
</style>