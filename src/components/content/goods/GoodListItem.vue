<template>
  <div class="goods-item" @click="itemclick">
    <!-- <lazy-component class="lazy">  /**v-lazy="goods.show.img"**/-->
    <img :src="goods.show.img" alt="" />
    <!-- </lazy-component> -->
    <div>
      <p>{{ goods.title }}</p>
      <span>{{ goods.price }}</span>
      <img
        class="collection"
        src="@/assets/img/home/collection.png"
        alt=""
        @load="imgload"
      />
      <span>{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "GoodListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgload() {
      this.$bus.$emit("itemimageload");
    },
    itemclick() {
      this.$router.push("detail/" + this.goods.iid);
     
    },
  },
  created() {},
};
</script>

<style scoped>
.goods-item {
  width: calc((100% / 2) - 6px);
  margin: 3px;
  text-align: center;
}
.goods-item > img {
  width: 100%;
  border-radius: 5px;
}
.goods-item p {
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-item span {
  font-size: 12px;
}
.goods-item span:nth-of-type(1) {
  color: red;
  padding-right: 6px;
}
.collection {
  vertical-align: middle;
  padding-bottom: 1px;
  padding-right: 1px;
}
</style>