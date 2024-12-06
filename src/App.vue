

<template>
<div class="container">

<div class="card">
  <h2>{{ $i18n('app.title') }}</h2>
 

  <button class="btn" @click="changeLang" >{{ $i18n('app.changeBtn') }}</button>
  <button class="btn primary" @click="model = true">Открыть модалку</button>
     
  <teleport to="body"> 
  <app-model 
     v-if="model"
     @close="model = false"
    
     ></app-model>
     </teleport>
</div>
 </div>
</template>

<script>
//import focusDirective from './focusDirective.js'
//import colorDirective from './colorDirectives.js'
import AppModel from './AppModel.vue';
export default { 
  inject: ['changeI18n'],
  data() {
    return {
      model: false
    }
  },
methods: {

  changeLang() {
    this.changeI18n('en')
    this.$forceUpdate()
  
  }
},
components: {
  AppModel

}
}

</script>


<style scoped>

</style>
