<template>
  <!--v-app id="Mukta-Shravya"-->
      <div id="wrapper">
        <Header/>
        <NavBar/>
        <main>
          <LeftNav/>
          <router-view/> 
        </main>
        <Footer/>
      </div>
  <!--/v-app-->
</template>

<script>
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';
import LeftNav from '@/components/LeftNav.vue';
import Footer from '@/components/Footer.vue';
import UserService from './UserService';

export default {
  name: 'app',
  components: {
    Header,
    NavBar,
    LeftNav,
    Footer
  },
  async created(){
    this.user = localStorage.getItem("user");
    this.userEmail=localStorage.getItem("userEmail");
    this.usersFound=await UserService.searchUsers({"email":this.userEmail});
    this.$store.commit("setDbUser", this.usersFound[0])
    this.$store.commit("setLoggedUser", this.user);
  }
}
</script>

<style>
  @import "css/main.css";
</style>
