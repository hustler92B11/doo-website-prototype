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
</div>
</template>

<script>

  export default {
    name: 'navbar',
    components: {
    },

    data() {
      return {
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
