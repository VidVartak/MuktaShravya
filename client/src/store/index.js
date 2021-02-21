import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store(
  {
    state: {
      userName:'',
      dbUser:{},
      currLanguage:"en",
      languageList:[
        {short:'en', long:'English'},
        {short:'mr', long:'मराठी'},
        {short:'hi', long:'हिंदी'}
      ]
    },
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
      getCurrLanguage: state => state.currLanguage,
      getLanguageList: state => state.languageList,
      getUserPrivileges: state => state.dbUser.privileges
    }
  }
);
