<template>
    <header>
      <img src="../assets/MuktaShravyaSmall.jpg" alt="logo">
      <div class="locale-changer">
        <span>Choose Language:</span>
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.short">
            {{ lang.long }}
          </option>
        </select>
      </div>
      <h1><span class="highlight"> {{$t('MuktaShravya')}} : </span> Indian Audio Books</h1>
      <h2>{{$t('headerTagLine')}}</h2>
  </header>
</template>

<script>

    export default{
    data () {
      return { langs:
        [
          {short:'en', long:'English'},
          {short:'mr', long:'मराठी'},
          {short:'hi', long:'हिंदी'}
        ]
      }
    }
}

</script>
<style scoped>

</style>