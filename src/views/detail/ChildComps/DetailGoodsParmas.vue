<template>
  <div class="dataail-goods-params">
    <table
      border="1"
      class="sizedetail"
      v-for="(table, index) in goodsparams.sizes"
      :key="index"
    >
      <tr v-for="(tr, index) in table" :key="index">
        <td v-for="(td, index) in tr" :key="index">{{ td }}</td>
      </tr>
    </table>
    <ul>
      <li v-for="(item, index) in goodsparams.infos" :key="index">
        <span>{{ item.key }}</span>
        <span>{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParams",
  props: {
    goodsparams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    console.log(this.goodsparams);
  },
};
</script>

<style scoped>
.dataail-goods-params {
  padding: 10px;
}
.sizedetail {
  text-align: center;
  margin-bottom: 10px;
  font-size: 14px;
  width: 100%;
  border-collapse: collapse;
}
.dataail-goods-params ul li {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
.dataail-goods-params ul li span:nth-of-type(1) {
  width: 20%;
}
.dataail-goods-params ul li span:nth-of-type(2) {
  color: var(--color-tint);
  width: 70%;
}
</style>