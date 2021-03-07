<template>
  <div id="contentWrapper">
    <h1>{{$t('volunteer')}} {{$t('login')}}</h1>
    <div id="loginMenu" v-if="loginUser">
      <button @click="handleClickSignOut" >{{$t('logout')}}</button>
      <ul>
        <li v-if="createBookAllowed"><router-link :to="{name: 'CreateBook'}">{{$t('createBook.Header')}} </router-link></li>
      </ul>

    </div>
    <div id="nonLoginMenu" v-else>
      <button @click="handleClickSignIn" >{{$t('login')}}</button>
      <!--button @click="handleClickGetAuth" >Get Auth</button-->
    </div>
  </div>
</template>

<script>
/** 
* You should first need to place these 2 lines of code in your APP ENTRY file, e.g. src/main.js
*
* import GAuth from 'vue-google-oauth2'
* Vue.use(GAuth, {clientId: '4584XXXXXXXX-2gqknkvdjfkdfkvb8uja2k65sldsms7qo9.apps.googleusercontent.com'})
* 
*/
import UserService from '../UserService';
export default {
  name: 'test',
  data: () => {
    return {
      isInit: false,
      isSignIn: false,
      user: ''
    }
  },
  computed:  {
    loginUser(){
      return this.$store.getters.getUserName;
    },
    createBookAllowed(){
      const filteredArray = this.$store.getters.getUserPrivileges.filter(value => ["admin","createBook"].includes(value));
      const returnVal=(filteredArray.length>0)?true:false;
      return returnVal;
    }
  },
  methods: {
    handleClickGetAuth(){
      this.$gAuth.getAuthCode()
      .then(authCode => {
        // On success
        return this.$http.post('http://your-backend-server.com/auth/google', { code: authCode, redirect_uri: 'postmessage' })
      })
      .then(response => {
        // And then
        console.log("get auth code success. Response:"+JSON.stringify(response))
      })
      .catch(error => {
        console.log("Error during get Auth:"+JSON.stringify(error))
        // On fail do something
      })
    },

    async handleClickSignIn(){
      console.log("in handleClickSignIn, user:"+this.user)
      if (!this.user){
        try {
          const googleUser = await this.$gAuth.signIn();
          if (!googleUser) {
            return null;
          }
          this.user = googleUser.getBasicProfile().getName();
          this.userEmail=googleUser.getBasicProfile().getEmail();
          this.usersFound=await UserService.searchUsers({"email":this.userEmail});
          this.$store.commit("setDbUser", this.usersFound[0])
          this.$store.commit("setLoggedUser", this.user);

          this.isSignIn = true;
          localStorage.setItem("user", this.user)
          localStorage.setItem("userEmail", this.userEmail)
        } catch (error) {
          //on fail do something
          console.error(error);
          return null;
        }
      }
    },

    async handleClickSignOut() {
      this.$store.commit("setDbUser", "")
      this.$store.commit("setLoggedUser", "");
      localStorage.removeItem("user")
      localStorage.removeItem("userEmail")
    },
    mounted(){
      let that = this
      let checkGauthLoad = setInterval(function(){
        that.isInit = that.$gAuth.isInit
        that.isSignIn = that.$gAuth.isAuthorized
        if(that.isInit) clearInterval(checkGauthLoad)
      }, 1000);

      this.user = this.$store.getters.getUserName;
    }
  }
  
}
</script>