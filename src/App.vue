

<template>
 <div class="container">
  <div class="card">
   <h2> дерективы </h2>
   <label for="int">Активный по умолчанию</label>
   <div class="form-control">
    <input v-focus type="text" id="int" >
   </div>
  </div>
 </div>
</template>

<script>
import focusDirective from './focusDirective.js'

export default {
    directives: {
        focus: focusDirective
    }
}


</script>


<style scoped>

</style>
