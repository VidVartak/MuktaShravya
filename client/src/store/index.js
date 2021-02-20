import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store(
  {
    state: {
      userName:'',
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
        setCurrLanguage (state, language){
        state.currLanguage = language;
      }
    },
    getters: {
      getUserName: state => state.userName,
      getCurrLanguage: state => state.currLanguage,
      getLanguageList: state => state.languageList
    }
  }
);
