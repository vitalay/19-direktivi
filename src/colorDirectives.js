export default {
mounted(el, binding) {
    console.log(binding);
    console.log(el)
 el.style.color = binding.value
},

updated(el, binding) {
    console.log(binding);
    console.log(el)

el.style.color = binding.value
}
}
    
