<template>
  <div class="detail-shop-info">
    <div class="shoplog">
      <img :src="shopinfo.shopLogo" alt="" /><span>{{ shopinfo.name }}</span>
    </div>
    <div class="shop-message">
      <div class="shop-message-left">
        <div>
          <span>{{ shopinfosells }}</span>
          <p>总销量</p>
        </div>
        <div>
          <span>{{ shopinfosgoods }}</span>
          <p>全部宝贝</p>
        </div>
        <div>
          <span>{{ shopinfosfans }}</span>
          <p>粉丝数</p>
        </div>
      </div>
      <div class="shop-message-right">
        <div v-for="(item, index) in shopinfo.score" :key="index">
          <p>{{ item.name }}</p>
          <p class="score" :class="{ lowscore: item.isBetter }">
            {{ item.score }}
          </p>
          <span
            class="scorespan"
            :class="{ scorespan_active: item.isBetter }"
            >{{ (scorelever = item.isBetter ? "高" : "低") }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {
      scorelever: "高",
    };
  },
  props: {
    shopinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    shopinfosells() {
      return parseFloat(this.shopinfo.Sells / 10000).toFixed(2) + "万";
    },
    shopinfosgoods() {
      return parseInt(this.shopinfo.Goods);
    },
    shopinfosfans() {
      return parseFloat(this.shopinfo.fans / 10000).toFixed(2) + "万";
    },
  },
};
</script>

<style scoped>
.detail-shop-info {
  padding: 10px;
}
.detail-shop-info .shoplog {
  display: flex;
  align-items: center;
}
.detail-shop-info .shoplog img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.detail-shop-info .shoplog span {
  padding-left: 10px;
  font-size: 16px;
  font-weight: 600;
}
.shop-message {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shop-message-left,
.shop-message-right {
  width: 50%;
}
.shop-message-left {
  font-weight: 700;
  text-align: center;
  display: flex;
  font-size: 14px;
  justify-content: space-around;
}
.shop-message .shop-message-left span {
  line-height: 30px;
}
.shop-message-right {
  border-left: 1px solid rgba(100, 100, 100, 0.2);
  font-weight: 700;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  padding: 0 5px
}
.shop-message-right div {
  display: flex;
  justify-content: space-between;
}
.shop-message-right p,
.shop-message-right span {
  font-size: 14px;
}
.score {
  color: #81c974;
}
.scorespan {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #81c974;
  color: white;
}
.lowscore {
  color: red;
}
.scorespan_active {
  background-color: red;
}
</style>