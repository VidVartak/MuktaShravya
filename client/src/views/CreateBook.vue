<template>
      <div id="contentWrapper" >
        <div class="createBook" v-if="loginUser">
          <h1> {{$t('createBook.Header')}} </h1>
          <h2 > {{$t('createBook.SubHeader')}} </h2>
          <!--v-dialog max-width="600px">
              <v-btn flat slot="activator" class="success">Add new book</v-btn>
              <v-card>
                  <v-card-title>
                      <h2>Add a New Book</h2>
                  </v-card-title>
                  <v-card-text>
            <v-form class="px-3">
                <v-text-field label="Title"></v-text-field>
            </v-form>
            </v-card-text>
            </v-card>
          </v-dialog-->
          <form  @submit.prevent="createBook">
            <input type="text" id="BookArchiveName" v-model="Book.ArchiveName" placeholder="Enter Archive Name">
            <input type="text" id="BookImageName" v-model="Book.ImageName" placeholder="Enter Image File Name">
            <select v-model="Book.Language">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.short" >
                    {{ lang.long }}
                </option>
            </select>
            <div id="BookEnglishHeader">
                <input type="text" id="EnglishBookTitle" v-model="Book.EnglishHeader.Title" placeholder="Enter book title in English">
                <input type="text" id="EnglishBookReader" v-model="Book.EnglishHeader.Reader" placeholder="Enter Reader Name in English">
                <input type="text" id="EnglishBookAuthor" v-model="Book.EnglishHeader.Author" placeholder="Enter Author Name in English">
                <input type="textarea" id="EnglishBookDesc" rows="4" cols="50" v-model="Book.EnglishHeader.Description" placeholder="Enter Description in English">
            </div>
            <div id="BookVernacularHeader">
                <input type="text" id="VernacularBookTitle" v-model="Book.VernacularHeader.Title" placeholder="Enter book title in Vernacular">
                <input type="text" id="VernacularBookReader" v-model="Book.VernacularHeader.Reader" placeholder="Enter Reader Name in Vernacular">
                <input type="text" id="VernacularBookAuthor" v-model="Book.VernacularHeader.Author" placeholder="Enter Author Name in Vernacular">
                <input type="textarea" id="VernacularBookDesc" rows="4" cols="50" v-model="Book.VernacularHeader.Description" placeholder="Enter Description in Vernacular">
            </div>
            <span class="searchCriteria">
                <input type="checkbox" id="history" name="history" value="history" v-model="Book.tags">
                <label for="history">{{$t('history')}}</label>
            </span>
            <span class="searchCriteria">
                <input type="checkbox" id="novel" name="novel" value="novel" v-model="Book.tags">
                <label for="novel">{{$t('fiction')}}</label>
            </span>
            <span class="searchCriteria">
                <input type="checkbox" id="religious" name="religious" value="religious" v-model="Book.tags">
                <label for="religious">{{$t('religion')}}</label>
            </span>
            <span class="searchCriteria">
                <input type="checkbox" id="social" name="social" value="social" v-model="Book.tags">
                <label for="social">{{$t('social')}}</label>
            </span>
            <span class="searchCriteria">
                <input type="checkbox" id="biography" name="biography" value="biography" v-model="Book.tags">
                <label for="thoughts">{{$t('biography')}}</label>
            </span>

            <button class="button_1">Submit</button>
          </form>
        </div>
        <div class="notLoggedIn" v-else>
            <p>You need to be logged in to use this page</p>
        </div>
      </div>
</template>

<script>
import BookService from '../BookService';
    export default {
        name: 'BookComponent',
          data() {
                return {
                    Book:{
                        ArchiveName: "",
                        ImageName:"",
                        Language: "",
                        CreatedAt: new Date(),
                        CreatedBy: "",
                        EnglishHeader: {
                            Title: "",
                            Reader: "",
                            Author: "",
                            Description: ""
                        },
                        VernacularHeader: {
                            Title: "",
                            Reader: "",
                            Author: "",
                            Description: ""
                        },
                        tags: []
                    }
                }
            },
        created() {
            this.Book.Language = this.currLanguage;
            this.Book.CreatedBy = this.loginEmail;
        },
        computed:  {
            loginUser(){
                return this.$store.getters.getUserName;
            },
            loginEmail(){
                return this.$store.getters.getUserEmail;
            },
            langs(){
                return this.$store.getters.getLanguageList;
            },
            currLanguage(){
                return this.$store.getters.getCurrLanguage;
            }
        },
        methods:{
            async createBook(){
                await BookService.insertBook(this.Book);
            }
        }
    }
</script>

<style scoped>
</style>
