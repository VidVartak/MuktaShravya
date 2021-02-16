<template>
      <div id="contentWrapper" :key="$route.params.id" >
        <div v-if="language==getBookLanguage()" >
          <h1> {{getVernacularTitle()}}</h1>
          <h2 > {{$t('bookDetail.ReadBy')}} {{getVernacularReader()}}</h2>
        </div>
        <div v-else>
          <h1> {{getEnglishTitle()}}</h1>
          <h2 > {{$t('bookDetail.ReadBy')}} {{getEnglishReader()}}</h2>
        </div>
        <div style="visibility: visible;">
          <p>{{$t('aboutText')}}</p>
          <iframe :src="`http://archive.org/embed/${this.books[0].ArchiveName}?playlist=y`" width="300" height="300" frameborder="0" allowFullScreen></iframe>
        </div>
      </div>
</template>

<script>
  import BookService from '../BookService';
  export default {
    name: 'BookDetail',
    data() {
      return {
        books: [], //This will be filled by the API calls later
        bookId: this.$route.params.id,
        title: '',
        vernacularTitle:'',
        reader: '',
        vernacularReader:'',
        archiveName:''
      }
    },
    async created(){
      this.update()
    },
    props: {
      id:{
        type:String,
        default: ""
      }
    },
    computed: {
      language(){
        return this.$i18n.locale;
      }
    },
    methods: {
      getArchiveName(){
        return this.books[0].archiveName;
      },
      getEnglishTitle(){
        return this.books[0].EnglishHeader.Title;
      },
      getVernacularTitle(){
        return this.books[0].VernacularHeader.Title;
      },
      getEnglishReader(){
        return this.books[0].EnglishHeader.Reader;
      },
      getVernacularReader(){
        return this.books[0].VernacularHeader.Reader;
      },
      getBookLanguage(){
        return this.books[0].Language;
      },
      async update(){
      try{
          this.books=await BookService.getBook(this.$route.params.id);
          this.archiveName=this.books[0].archiveName;
        } catch(err){
          this.error = err.message;
        }
      },
    },
    watch: {
      $route(to, from){
        if (to!==from){
          this.update();
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
