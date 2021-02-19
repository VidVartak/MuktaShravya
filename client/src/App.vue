<template>
    <div>
      <div id="wrapper">
        <Header/>
        <NavBar/>
        <main>
          <LeftNav/>
          <router-view/> 
        </main>
        <Footer/>
      </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';
import LeftNav from '@/components/LeftNav.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'app',
  components: {
    Header,
    NavBar,
    LeftNav,
    Footer
  }
}
</script>

<style>
  @import "css/main.css";
</style>
