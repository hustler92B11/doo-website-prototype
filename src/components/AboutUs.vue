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
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      title: 'About Us',
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
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
