<template>
      <div id="searchResults"  >
        <h2>{{$t('searchResults.Header1')}} {{books.length}} {{$t('searchResults.Header2')}}</h2>
        <ul>
          <li
          v-for="(book, index) in books"
          v-bind:item="book"
          v-bind:index="index"
          v-bind:key="book._id"
          >
            <router-link v-if="language==book.book.Language" :to="{name: 'BookDetail', params: {book:book, id:`searchResult${index}`}}">{{book.book.VernacularHeader.Title}} ({{$t('leftNav.ReadBy')}}: {{book.book.VernacularHeader.Reader}})</router-link>
            <router-link v-else :to="{name: 'BookDetail', params: {book:book, id:`searchResult${index}`}}">{{book.book.EnglishHeader.Title}}( {{$t('leftNav.ReadBy')}} {{book.book.EnglishHeader.Reader}})</router-link>

          </li>
        </ul>
      </div>
</template>

<script>

export default {
  name: 'SearchResults',
  props: {
    books:Array
  },
  computed: {
    language(){
      return this.$i18n.locale;
    }
  }
}
</script>

<style scoped>
</style>
