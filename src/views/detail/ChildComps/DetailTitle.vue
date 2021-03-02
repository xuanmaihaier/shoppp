<template>
  <div class="detail-title">
    <p>{{ goods.title }}</p>
    <div class="price">
      <h3>{{ goods.price }}</h3>
      <span v-if="goods.oldPrice">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <ul class="detail-title-main">
      <li v-for="(item, index) in goods.columns" :key="index">
        <span>{{ item }}</span>
      </li>
    </ul>
    <ul class="detail-title-footer">
      <li v-for="(item, index) in goods.services" :key="index">
        <img v-if="item.icon" :src="item.icon" alt="" /><span
          v-if="item.name"
          >{{ item.name }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailTitle",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  created() {},
};
</script>

<style>
.detail-title {
  padding: 10px;
}
.detail-title p {
  font-size: 16px;
  font-weight: 700;
}
.detail-title .price {
  padding-top: 10px;
}
.detail-title .price h3 {
  color: var(--color-tint);
  display: inline-block;
  padding-right: 5px;
}
.detail-title .price span:nth-of-type(1) {
  font-size: 14px;
  text-decoration: line-through;
}
.detail-title .price span:nth-of-type(2) {
  text-align: center;
  display: inline-block;
  width: 60px;
  line-height: 20px;
  border-radius: 8px;
  font-size: 14px;
  color: #fff;
  background-color: var(--color-tint);
  position: relative;
  top: -10px;
}
.detail-title-main,
.detail-title-footer {
  display: flex;
  justify-content: space-between;
}
.detail-title-main {
  padding-top: 20px;
  padding-bottom: 10px;
}
.detail-title-footer {
  padding: 15px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  flex-wrap: wrap;
}
.detail-title-main li,
.detail-title-footer li {
  font-size: 12px;
}
.detail-title-footer li span {
  display: inline-block;
  line-height: 20px;
}
.detail-title-footer li img {
  width: 16px;
  vertical-align: middle;
  margin-bottom: 4px;
}
</style>