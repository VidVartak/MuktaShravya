<template>
      <div id="contentWrapper" :key="$route.params.id" >
        <div v-if="language==getBookLanguage()" >
          <h1> {{getVernacularTitle()}}</h1>
          <h2 >{{$t('bookDetail.Author')}}: {{getVernacularAuthor()}}, {{$t('bookDetail.ReadBy')}}: {{getVernacularReader()}}</h2>
          <p>{{getVernacularDesc()}}</p>
        </div>
        <div v-else>
          <h1> {{getEnglishTitle()}}</h1>
          <h2 >{{$t('bookDetail.Author')}}: {{getEnglishAuthor()}}, {{$t('bookDetail.ReadBy')}}: {{getEnglishReader()}}</h2>
          <p>{{getEnglishDesc()}}</p>
        </div>
        <div style="visibility: visible;">
          <iframe :src="`http://archive.org/embed/${this.books[0].book.ArchiveName}?playlist=y`" width="300" height="300" frameborder="0" allowFullScreen></iframe>
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
        return this.books[0].book.archiveName;
      },
      getEnglishTitle(){
        return this.books[0].book.EnglishHeader.Title;
      },
      getVernacularTitle(){
        return this.books[0].book.VernacularHeader.Title;
      },
      getEnglishReader(){
        return this.books[0].book.EnglishHeader.Reader;
      },
      getVernacularReader(){
        return this.books[0].book.VernacularHeader.Reader;
      },
      getEnglishAuthor(){
        return this.books[0].book.EnglishHeader.Author;
      },
      getVernacularAuthor(){
        return this.books[0].book.VernacularHeader.Author;
      },
      getEnglishDesc(){
        return this.books[0].book.EnglishHeader.Description;
      },
      getVernacularDesc(){
        return this.books[0].book.VernacularHeader.Description;
      },
      getBookLanguage(){
        return this.books[0].book.Language;
      },
      async update(){
      try{
          this.books=await BookService.getBook(this.$route.params.id);
          this.archiveName=this.books[0].book.archiveName;
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
