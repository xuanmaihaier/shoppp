<template>
  <div class="DetailCommentInfo">
    <div class="title">
      <p>用户评价</p>
      <p>更多</p>
    </div>
    <div class="content">
      <img v-if="commentInfo.user" :src="commentInfo.user.avatar" alt="" />
      <p v-if="commentInfo.user">{{ commentInfo.user.uname }}</p>
    </div>
    <div class="evaluate" v-if="commentInfo.content">
      <p>
        {{ commentInfo.content }}
      </p>
    </div>
    <div class="shopstyle">
      <span  v-if="commentInfo.created">{{ commentInfo.created | formatDate }} </span>
      <span  v-if="commentInfo.style">{{ commentInfo.style }}</span>
    </div>
    <div class="evaluate_img" v-if="commentInfo.images">
      <img
        v-for="(item, index) in commentInfo.images"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import {formatDate } from '@/common/utils'
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters:{
    formatDate(value){
     var date = new Date(value*1000);
     return formatDate(date,"yyyy-MM-dd")
    }
  },
};
</script>

<style scoped>
.DetailCommentInfo {
  padding: 10px;
}
.title {
  font-size: 14px;
  padding: 10px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
.content {
  font-weight: 700;
  padding: 5px;
  display: flex;
  align-items: center;
}
.content > img {
  width: 40px;
  border-radius: 50%;
}
.content p {
  padding-left: 5px;
}
.evaluate {
  padding-top: 5px;
  font-size: 14px;
  font-weight: 500;
}
.shopstyle {
  padding-top: 8px;
  font-size: 14px;
  color: #999;
}
.evaluate_img {
  display: flex;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
.evaluate_img img {
  width: 100%;
  margin-left: 4px;
}
</style>