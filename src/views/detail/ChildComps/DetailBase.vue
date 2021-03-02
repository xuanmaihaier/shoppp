<template>
  <div class="detail-base">
    <span>{{shopbase.desc}}</span>
    <p>{{shopbase.key}}</p>
    <img v-for="(item,index) in shopbase.list" :key="index" :src="item" alt=""  @load="imgload">
  </div>
</template>

<script>
export default {
  name:"DetailBase",
  data(){
    return {
      count : 0
    }
  },
  props:{
    shopbase:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
     imgload(){
      this.$emit('imgload')
    }
  }
}
</script>

<style scoped>
.detail-base {
  padding-top: 20px;
}
.detail-base img{
  width: 100%;
}

</style>