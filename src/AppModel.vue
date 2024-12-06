

<template>
    <div class="model-backdrop" @click="$emit('close')"></div>
    <div class="model">
        <h3>Это заголовок модалки</h3>
        <p>Lorem ipsum, dolor sit amet
             consectetur adipisicing elit. 
             Quas sed eius quod nesciunt 
             ratione deleniti magnam delectus
              voluptates cum facilis! Cum alias 
              et ea voluptate, aliquam eveniet
               magni deleniti! Beatae.</p>
    
   
     </div>
    </template>
    
    <script>
    
    export default { 
        emits: ['close']
    
    }
    
    
    </script>
    
    
    <style scoped>
    
    </style>
    