<template>
  <div class="DetailRecommend" v-if="recommend">
    <div v-for="(item,index) in recommend" :key="index">
      <img :src="item.image" alt="" >
      <p>{{item.title}}</p>
      <span v-if="item.discountPrice">{{item.discountPrice}}</span>
    </div>
 
  </div>
</template>

<script>
export default {
  name:"DetailRecommend",
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    
  },
  updated(){
    console.log(this.recommend);
  }
}
</script>

<style scoped>
.DetailRecommend{
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.DetailRecommend div{
  width: calc((100% / 2) - 6px);
  margin: 3px;
}
.DetailRecommend div img{
  width: 100%;
}
.DetailRecommend div p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>