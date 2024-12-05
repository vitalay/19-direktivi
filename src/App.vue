

<template>
 <div class="container">
  <div class="card">
   <h2 v-color:[type].blinc="myColor"> дерективы </h2>
   <label for="int">Активный по умолчанию</label>
   <div class="form-control">
    <input v-focus type="text" id="int" >
   </div>
   <button class="btn" @click="myColor = 'green'">выбрать цвет</button>
   <button class="btn" @click="type = type === 'color' ? 'backgroundColor' : 'color'">переключить тип</button>
    {{ type }}  
  </div>
 </div>
</template>

<script>
import focusDirective from './focusDirective.js'
import colorDirective from './colorDirectives.js'

export default {
  data() {
    return {
      myColor: 'red',
      type: 'color'
    }
  },

    directives: {
        focus: focusDirective,
        color: colorDirective
    }
}


</script>


<style scoped>

</style>
