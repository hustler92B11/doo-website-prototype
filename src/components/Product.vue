<template>
<div>
<v-toolbar dense fixed>
  <router-link to="/home">
 <v-img :src="require('@/assets/tech_logo_new.svg')"></v-img>
 </router-link>
  &nbsp;&nbsp;
   <router-link to="/product">
   {{navigation_titles.product}}
   </router-link>
  &nbsp;&nbsp;
   <router-link to="/blog">
   {{navigation_titles.blog}}
   </router-link>
&nbsp;&nbsp;
   <router-link to="/aboutus">
    {{navigation_titles.about_us}}
   </router-link>
&nbsp;&nbsp;
   <router-link to="/contactus">
    {{navigation_titles.contact_us}}
   </router-link>
</v-toolbar>

<h1>{{ title }}</h1>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>Brocker Cloud</swiper-slide>
    <swiper-slide>Hosting Cloud</swiper-slide>
    <swiper-slide>In Trade</swiper-slide>
    <swiper-slide>OutTrade</swiper-slide>
    <swiper-slide>PAMM/MAM</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'Product',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          autoplay: {
            delay: 1500,
            disableOnInteraction: true
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        navigation_titles: {
         product: 'Product',
         blog: 'Blog',
         about_us: 'About Us',
         contact_us: 'Contact Us'
        },
        title: 'Products'
      }
    }
  }
</script>

<style lang="scss" scoped>
.swiper-slide {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
.swiper-container {
      height : 500px;
      color: #000000;
    }
.swiper-pagination {
    top: 80%;
}
</style>