

<template>
 <div class="container">
  <div class="card">
   <h2 v-color="myColor"> дерективы </h2>
   <label for="int">Активный по умолчанию</label>
   <div class="form-control">
    <input v-focus type="text" id="int" >
   </div>
   <button class="btn" @click="myColor = 'green'">выбрать цвет</button>
  </div>
 </div>
</template>

<script>
import focusDirective from './focusDirective.js'
import colorDirective from './colorDirectives.js'

export default {
  data() {
    return {
      myColor: 'red'
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
