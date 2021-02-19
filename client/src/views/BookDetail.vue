<template>
      <div id="contentWrapper" >
        <div v-if="language==book.book.Language" >
          <h1> {{book.book.VernacularHeader.Title}}</h1>
          <h2 >{{$t('bookDetail.Author')}}: {{book.book.VernacularHeader.Author}}, {{$t('bookDetail.ReadBy')}}: {{book.book.VernacularHeader.Reader}}</h2>
          <p>{{book.book.VernacularHeader.Description}}</p>
        </div>
        <div v-else>
          <h1> {{book.book.EnglishHeader.Title}}</h1>
          <h2 >{{$t('bookDetail.Author')}}: {{book.book.EnglishHeader.Author}}, {{$t('bookDetail.ReadBy')}}: {{book.book.EnglishHeader.Reader}}</h2>
          <p>{{book.book.EnglishHeader.Description}}</p>
        </div>
        <div style="visibility: visible;">
          <iframe :src="`http://archive.org/embed/${this.book.book.ArchiveName}?playlist=y`" width="300" height="300" frameborder="0" allowFullScreen></iframe>
        </div>
      </div>
</template>

<script>
  export default {
    name: 'BookDetail',
    props: {
      book:{}
    },
    computed: {
      language(){
        return this.$i18n.locale;
      }
    },
    methods: {
      async update(){
      try{
          this.archiveName=this.book.book.archiveName;
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
