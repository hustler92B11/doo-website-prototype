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

  <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img src="@/assets/hosting_cloud.png" ></swiper-slide>
    <swiper-slide>In Trade</swiper-slide>
    <swiper-slide>Hosting</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-pagination-progress',
    title: 'Progress pagination',
    components: {
      Swiper,
      SwiperSlide
    },

    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 1500,
            disableOnInteraction: true
          },
          pagination: {
            slidesPerView: 'auto',
            el: '.swiper-pagination',
            type: 'progressbar'
          }
        },
        navigation_titles: {
         product: 'Product',
         blog: 'Blog',
         about_us: 'About Us',
         contact_us: 'Contact Us'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.swiper-slide {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
.swiper-container {
      height : 500px;
    }
.swiper-pagination {
    top: 98%;
}
      
</style>
