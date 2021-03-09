import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store(
  {
    state: {
      userName:localStorage.getItem("user"),
      dbUser:{},
      currLanguage:"en",
      languageList:[
        {short:'en', long:'English'},
        {short:'mr', long:'मराठी'},
        {short:'hi', long:'हिंदी'}
      ]
    },
//dbUser=UserService.searchUsers({"email":localStorage.getItem("userEmail")})
    mutations: {
      setLoggedUser (state, loggedInUser){
        state.userName = loggedInUser;
      },
      setDbUser (state, dbUser){ //This is the data we have in our database, which includes the privileges etc.
        state.dbUser = dbUser;
      },
      setCurrLanguage (state, language){
        state.currLanguage = language;
      }
    },
    getters: {
      getUserName: state => state.userName,
      getUserEmail: state => state.dbUser.email,
      getCurrLanguage: state => state.currLanguage,
      getLanguageList: state => state.languageList,
      getUserPrivileges: state => state.dbUser.privileges
    }
  }
);
