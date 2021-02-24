<template>
  <li class="tab-bar-item" @click="itemClick">
    <div v-if="isActivity">
    <slot name="item-img"></slot>
    </div>
    <div v-else>
    <slot name="item-img-active"></slot>
    </div>
    <div :style='itemColor'>
    <slot name="item-text"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: "TagBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  computed:{
    isActivity(){
      return this.$route.path.indexOf(this.path)?true:false
    },
    itemColor(){
       return this.$route.path.indexOf(this.path)?{}:{color:this.activeColor}
    }
  },
  methods: {
    itemClick(){
      if(this.$route.path!==this.path)
      this.$router.replace(this.path)
    }
  },
};
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 5px;
  margin-bottom: 2px;
}
</style>