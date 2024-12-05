

<template>
<div class="container">

<div class="card">
  <h2>{{ $i18n('app.title') }}</h2>
 

  <button class="btn" @click="changeLang" >{{ $i18n('app.changeBtn') }}</button>

</div>
 </div>
</template>

<script>
import focusDirective from './focusDirective.js'
import colorDirective from './colorDirectives.js'

export default { 
  inject: ['changeI18n'],
  
methods: {

  changeLang() {
    this.changeI18n('en')
    this.$forceUpdate()
  
  }
}

}


</script>


<style scoped>

</style>
