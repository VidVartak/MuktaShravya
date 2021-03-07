<template>
      <div id="leftNav"  >
        <h2>{{$t('leftNav.BooksList')}}</h2>
        <ul>
          <li
          v-for="(book, index) in books"
          v-bind:item="book"
          v-bind:index="index"
          v-bind:key="book._id"
          >
            <router-link v-if="language==book.book.Language" :to="{name: 'BookDetail', params: {book:book, bookId:index}}">{{book.book.VernacularHeader.Title}} ({{$t('leftNav.ReadBy')}}: {{book.book.VernacularHeader.Reader}})</router-link>
            <router-link v-else :to="{name: 'BookDetail', params: {book:book, bookId:index}}">{{book.book.EnglishHeader.Title}} ({{$t('leftNav.ReadBy')}} {{book.book.EnglishHeader.Reader}})</router-link>

          </li>
        </ul>
      </div>
</template>

<script>
import BookService from '../BookService';

export default {
  name: 'LeftNav',
  data() {
    return {
      books: [], //This will be filled by the API calls later
      title: '',
      vernacularTitle:'',
      reader: '',
      vernacularReader:'',
      archiveName:''
    }
  },
  async created(){
    try{
      this.books=await BookService.getBooks();

    } catch(err){
      this.error = err.message;
    }
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
  }
}
</script>
