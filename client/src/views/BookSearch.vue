<template>
      <div id="contentWrapper"  >
        <h1>{{$t('findABook')}}:</h1>
        <h2>({{$t('chooseCriteria')}})</h2>
        <form class="searchForm" @submit.prevent="searchBooks">
          <span class="searchCriteria">
            <input type="checkbox" id="history" name="history" value="history" v-model="categories">
            <label for="history">{{$t('history')}}</label>
          </span>
          <span class="searchCriteria">
            <input type="checkbox" id="novel" name="novel" value="novel" v-model="categories">
            <label for="novel">{{$t('fiction')}}</label>
          </span>
          <span class="searchCriteria">
            <input type="checkbox" id="religious" name="religious" value="religious" v-model="categories">
            <label for="religious">{{$t('religion')}}</label>
          </span>
          <span class="searchCriteria">
            <input type="checkbox" id="social" name="social" value="social" v-model="categories">
            <label for="social">{{$t('social')}}</label>
          </span>
          <span class="searchCriteria">
            <input type="checkbox" id="biography" name="biography" value="biography" v-model="categories">
            <label for="thoughts">{{$t('biography')}}</label>
          </span>
          <div>
            <button type="submit" class="button_1" name="submit">{{$t('Search')}}</button>
          </div>
        </form>
      <SearchResults :books="booksFound" />
    </div>
</template>
<script>
import BookService from '../BookService';
import SearchResults from '@/components/SearchResults.vue';

    export default {
        name: 'SearchComponent',
        data() {
            return {
              categories:[],
              booksFound:[]
            }
        },
        components: {
          SearchResults
        },
        computed:  {
            loginUser(){
            return this.$store.getters.getUserName;
            }
        },
        methods:{
            async searchBooks(){
                this.booksFound=await BookService.searchBooks({"book.tags":{"$in":this.categories}});
            }
        }
    }
</script>

<style scoped>
</style>
