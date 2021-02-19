<template>
    <nav>
      <ul>
        <li><router-link :to="{name: 'Login'}"><span v-if="loginUser"> {{$t('loggedinVolunteer')}}: {{ loginUser }}</span> <span v-else>{{$t('volunteer')}} {{$t('login')}}</span> </router-link></li>
        <li><router-link :to="{name: 'JoinUs'}">{{$t('volunteerWithUs.header')}} </router-link></li>
        <li><router-link :to="{name: 'About'}">{{$t('aboutUs')}} </router-link></li>
        <li><router-link :to="{name: 'Home'}">{{$t('home')}}</router-link></li>
      </ul>
    </nav>
</template>
<script>
export default {
  computed:  {
    loginUser(){
      return this.$store.getters.getUserName;
    }
  }
}
</script>
<style scoped>
  li:hover{
    transform: scale(1.3, 1.3);
  }

  li{transition: all 0.25s ease; cursor:pointer}
</style>