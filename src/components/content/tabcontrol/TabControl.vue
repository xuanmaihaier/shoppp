<template>
  <div class="tab-control">
    <ul>
      <li v-for="(item,index) in title" :key="index"><span :class="{active:index===currentpage}" @click="changepage(index)">{{item}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    title:{
      type:Array,
      defalut(){
        return []
      }
    }
  },
  data() {
    return {
      currentpage:0
    }
  },
  methods: {
    changepage(index){
      this.currentpage=index,
      this.$emit("checkindex",index)
    },
  },
}
</script>

<style scoped>
.tab-control{
  z-index: 10;
  top: 44px;
}
.tab-control ul{
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: flex;
  font-size: 15px;
  background-color: white;
}
.tab-control li{
  flex: 1;
}
.tab-control span{
  display: inline-block;
  width: 50%;
  height: 38px;
}
.active{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>