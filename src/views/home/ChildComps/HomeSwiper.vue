<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="item in banner.list" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  name: "HomeSwiper",
  props: {
    banner: Object,
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style scoped>
  .banner .swiper-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: pink;
}
.banner .swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
.banner .swiper-container .swiper-slide img {
  width: 100%;
  height: 100%;
}

</style>